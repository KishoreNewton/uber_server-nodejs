import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

const port: number | string = process.env.PORT || 4000;
const playground: string = '/playground';
const endpoint: string = '/graphql';
const appOptions: Options = {
  port,
  playground,
  endpoint
};

createConnection(connectionOptions).then(() => {
  app.start(appOptions, () => {
    console.log(`Listening on port ${port}`);
  });
});


