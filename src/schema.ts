import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const allTypes: GraphQLSchema[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: string[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypeDefs(allTypes);
// @ts-ignore
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  // @ts-ignore
  resolvers: mergedResolvers,
});

export default schema;
