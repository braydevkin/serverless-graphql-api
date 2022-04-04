import {
  Context,
  APIGatewayProxyEvent,
  Callback,
  APIGatewayProxyResult,
} from "aws-lambda";

import { graphQLServer } from "./src/graphql/server";
import { ProductResolver } from "./src/module/product/product.resolver";

export function graphql(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>
) {
  graphQLServer([ProductResolver]).then(async (handler) => {
    handler(event, context, callback);
  });
}
