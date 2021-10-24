![Screenshot_1](https://user-images.githubusercontent.com/35710766/138612674-eb691b53-0719-49f1-a557-572dc8d7a7e8.png)

<h2>:earth_americas: Visão geral</h2>
<p>Aplicação construída durante o evento da NLW Heat. Se trata de uma tela de login dos usuários que irão participar do evento Do While 2021, que acontecerá nos dias 1 e 2 de dezembro, promovido pela <a href="https://www.rocketseat.com.br/">Rocketseat</a>.</p>

</br>

<h2>:wrench: Tecnologias</h2>

<h3>:computer: Front-end</h3>
<ul>
  <li><a href="https://reactjs.org/">ReactJs</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://sass-lang.com/">SASS</a></li>
  <li><a href="https://www.npmjs.com/package/socket.io-client">socket.io-client</a></li>
  <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
  <li><a href="https://vitejs.dev/">Vite</a></li>
</ul>

<h3>:gear: Backend</h3>
<ul>
  <li><a href="https://nodejs.org/en/">NodeJs</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>  
  <li><a href="https://www.npmjs.com/package/socket.io-client">socket.io-client</a></li>
  <li><a href="https://axios-http.com/docs/intro">Axios</a></li>  
  <li><a href="https://www.prisma.io/">Prisma</a></li>    
</ul>

<h3>:iphone: Mobile</h3>
<ul>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>  
  <li><a href="https://expo.dev/">Expo</a></li>  
  <li><a href="https://www.npmjs.com/package/socket.io-client">socket.io-client</a></li>
  <li><a href="https://axios-http.com/docs/intro">Axios</a></li>  
</ul>

</br>

<h2>:triangular_flag_on_post:Passo-a-passo</h2>

1 - Clone o repositório
```sh
git clone https://github.com/VictorMello1993/nlw-heat.git
```

<h3>Executando back-end (API)</h3>

2 - A partir da pasta ```nlw-heat```, instale as dependências do projeto e inicie o servidor digitando os seguintes comandos:

<h3>NPM</h3>

```sh
cd nlw-heat
npm install
npm run dev
```

<h3>Yarn</h3>

Ou, se preferir, caso tenha ```Yarn``` instalado na sua máquina, digite os seguintes comandos:

```sh
cd nlw-heat
yarn
yarn dev
```

3 - Para testar a API, segue o botão abaixo contendo todos os endpoints da aplicação:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%20Heat&uri=https%3A%2F%2Fraw.githubusercontent.com%2FVictorMello1993%2Fnlw-heat%2Fmain%2Fapi.json)

<h3>:oil_drum: Banco de dados</h3>

O banco de dados utilizado no back-end foi o Prisma. Para executá-lo, digite o comando abaixo:

```sh
yarn prisma studio
```

<h3>Executando Front-end</h3>

Navegue para a pasta ```web```, instale as dependências e execute a aplicação digitando os comandos abaixo:

```sh
cd web
yarn
yarn dev
```
Caso prefira utilizar NPM, basta executar os comandos abaixo:

```sh
cd web
npm install
npm run dev
```

<h3>Executando Mobile</h3>

1- Navegue para pasta ```nlwheatapp```, instale as dependências e execute a aplicação digitando os comandos abaixo

```sh
cd nlwheatapp
yarn # ou npm install
expo start
```

Você poderá utilizar um emulador Android ou IOS instalado na sua máquina, ou até mesmo utilizar o próprio dispositivo físico. Neste caso, basta instalar Expo Go e scanear QR Code que é exibido na tela após executar o Expo.
