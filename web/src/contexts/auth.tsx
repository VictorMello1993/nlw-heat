import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function AuthProvider(props: AuthProvider){

  //Estado do usuário
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=18f55b921aed95034d55`;

  async function signIn(githubCode: string){
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const {token, user} = response.data;    

    //Salvando o token no local storage
    localStorage.setItem('@dowhile:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  async function signOut(){
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  //Recuperando o token do local storage para acessar os dados do usuário logado no back-end
  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if(token){
      //Salvando o token no header da requisição, graças ao funcionamento do Axios 
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(response => {
        setUser(response.data)
      })
    }
  })

  //Gerenciamento de estados do LoginBox - Redirecionando para aplicação quando usuário estiver autenticado e autorizado no Github
  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=')

    if(hasGithubCode){
      const [urlWithoutCode, githubCode] = url.split('?code=')

      //Removendo o código do Github exposto na URL
      window.history.pushState({}, '', urlWithoutCode)

      signIn(githubCode)
    }
  }, [])  
  
  return (
    //Contexto de autenticação que será acessível aos componentes que irão acessar as informações de usuário autenticado
    <AuthContext.Provider value={{signInUrl, user, signOut}}>
      {props.children}
    </AuthContext.Provider>
  )
}

