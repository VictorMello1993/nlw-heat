import "dotenv/config"
import express from 'express';
import http from "http";
import cors from "cors"; //Controlando a permissão de outras fontes (front-end ou mobile) se comunicando com Websocket
import {Server} from "socket.io";
import {router} from "./routes";

const app = express();

app.use(cors());

// Configuração do Websocket
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

//Escutando o evento se o usuário está conectado na aplicação
io.on("connection", socket => {
  console.log(`Usuário conetado no socket ${socket.id}`)
})

app.use(express.json());
app.use(router);

//Autenticação do GitHub
//https://localhost:4000/github 
app.get('/github', (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

//Rota de redirecionamento para a página onde será apresentada um novo client Id do usuário autenticado
app.get("/signin/callback", (request, response) => {
  //Obtendo o Client ID da URL
  const {code} = request.query;

  return response.json(code);
})

export {serverHttp, io}

