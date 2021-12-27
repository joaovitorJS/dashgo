import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 10); // cria 200 usuários
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // ms

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}