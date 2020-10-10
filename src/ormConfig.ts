import { ConnectionOptions } from 'typeorm';

const { DB_ENDPOINT, DB_USERNAME, DB_PASSWORD } = process.env 
console.log({
  DB_ENDPOINT,
  DB_USERNAME,
  DB_PASSWORD
})

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'uber',
  synchronize: true,
  logging: true,
  entities: ['entities/**/*.*'],
  host: process.env.DB_ENDPOINT,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;
