import {Server, Model, Response} from 'miragejs';
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
            return new Response(
              200,
              {
                authorization: 'Bearer token',
                'refresh-token': 'refresh-token',
              },
              {
                id: '1',
              },
            );
          } else {
            return new Response(
              401,
              {},
              {
                message: 'Usuário ou senha inválidos',
              },
            );
          }
        },
        {timing: 4000},
      );

      this.get(
        'user',
        () => {
          return new Response(
            200,
            {},
            {
              name: 'Davidson Marra',
              role: 'patient',
            },
          );
        },
        {timing: 1000},
      );
    },
  });
  return server;
}
