import { ApolloServer } from "apollo-server-lambda";

import { getSchema } from "../common/getSchema";

export async function graphQLServer(resolvers: any) {
  const schema = await getSchema(resolvers);

  const server = new ApolloServer({
    schema,
    playground: {
      endpoint: "/dev/graphql",
      settings: {
        "schema.polling.enable": true, // enables automatic schema polling
        "schema.polling.endpointFilter": "*localhost*", // endpoint filter for schema polling
        "schema.polling.interval": 2000, // schema polling interval in ms
      },
    },
  });

  return server.createHandler({
    cors: {
      origin: "*",
    },
  });
}
