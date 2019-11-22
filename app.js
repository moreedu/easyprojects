/* eslint-disable new-cap */
// Este é o arquivo da estrutura da aplicação com os middlewares e Rotas
import express from 'express';
import path from 'path';
import routes from './routes'; // importanto o arquivo routes de rotas

import './database'; // importando o index da pasta database

class app {
  constructor() {
    this.server = express();
    // Se eu não inserir no constructor nunca irão rodar tanto middlewares como as rotas
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Requisições serem chamadas no formato Json
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes); // Chamando as rotas, em forma de middlewares com .use
  }
}

export default new app().server;
