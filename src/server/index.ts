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
              phone: '31997654219',
              role: 'user',
            },
          );
        },
        {timing: 1000},
      );

      this.get(
        'hours/:date',
        () => {
          return new Response(200, {}, [
            '8:00',
            '9:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
          ]);
        },
        {timing: 1000},
      );

      this.get('categories', () => {
        return new Response(200, {}, [
          {id: '1', name: 'Limpeza'},
          {id: '2', name: 'Exame'},
        ]);
      });
    },
  });
  return server;
}
