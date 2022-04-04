import { Arg, Mutation } from "type-graphql";
import { IProduct } from "../../common/interfaces/product.interface";
import { DynamoRepository } from "../../repository/dynamodb/dynamodb.repository";
import { ProductResponseInput } from "./product.inputs";
import { ProductType } from "./product.types";

export class ProductResolver {
  private readonly repository: DynamoRepository<IProduct>;

  @Mutation(() => ProductType)
  async create(
    @Arg("data", () => ProductResponseInput) data: IProduct
  ): Promise<IProduct> {
    try {
      const created = await this.repository.create(data as any);
      if (created) return created;
      throw new Error("Has an error to create product");
    } catch (err) {
      return err;
    }
  }
}
