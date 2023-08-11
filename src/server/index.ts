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
        () => {
          return 'LOGOU';
        },
        {timing: 4000},
      );
    },
  });
  return server;
}