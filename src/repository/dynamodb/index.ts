require("dotenv").config();
import { config } from "aws-sdk";
import DynamoDB from "aws-sdk/clients/dynamodb";
import { DynamoDBClientConfigs } from "../../common/interfaces/dynamoClientConfig.interface";

//TODO TO DEFINE REGION AND ENDPOINT OF PROD
let configs: DynamoDBClientConfigs = {
  region: "localhost",
  endpoint: "http://localhost:8000",
};
if (process.env.IS_LOCAL) {
  configs.region = "localhost";
  configs.endpoint = "http://localhost:8000";
}
export const dynamoDB = new DynamoDB({
  ...config,
  apiVersion: "2012-08-10",
});
