import { Options } from "graphql-yoga";
import app from "./app";

const port: number | string = process.env.PORT || 4000;
const playground: string = "/playground";
const endpoint: string = "/graphql";
const appOptions: Options = {
  port,
  playground,
  endpoint
};

app.start(appOptions, () => {
  console.log(`Listening on port ${port}`)
});
