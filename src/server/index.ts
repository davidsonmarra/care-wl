import {Server, Model} from 'miragejs';
import {BASE_URL, VERSION} from '@helpers';

export function makeServer({environment = 'development'} = {}) {
  const server = new Server({
    environment,
    models: {
      dates: Model,
    },
    routes() {
      this.urlPrefix = `${BASE_URL}/${VERSION}`;

      this.post(
        'login',
        (_, req) => {
          const {email, password} = JSON.parse(req.requestBody);
          if (email === 'davidsonmarra@gmail.com' && password === 'Senha@123') {
            return 'LOGOU';
          } else {
            throw new Error('Usuário ou senha inválidos');
          }
        },
        {timing: 4000},
      );
    },
  });
  return server;
}
