import { DynamoDB } from "aws-sdk";
import { dynamoDB } from ".";

import { DatabaseRepository } from "../database.repository";

export class DynamoRepository<Entity> implements DatabaseRepository<Entity> {
  private readonly dynamoModel: DynamoDB;

  constructor() {
    this.dynamoModel = dynamoDB;
  }

  async create(data: Entity & DynamoDB.PutItemInput): Promise<Entity> {
    return this.dynamoModel.putItem(data, (err, data) => {
      if (err) return console.log(err);
      return data;
    }) as any;
  }
}
