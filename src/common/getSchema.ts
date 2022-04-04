import path from "path";

import { GraphQLSchema } from "graphql";

import * as TypeGraphQL from "type-graphql";

export const getSchema = async (
  resolvers:
    | TypeGraphQL.NonEmptyArray<Function>
    | TypeGraphQL.NonEmptyArray<string>
): Promise<GraphQLSchema> => {
  return await TypeGraphQL.buildSchema({
    resolvers: resolvers,
    validate: true,
    emitSchemaFile: {
      path: path.resolve(__dirname, "..", "..", "schema.gql"),
      sortedSchema: false,
    },
  });
};
