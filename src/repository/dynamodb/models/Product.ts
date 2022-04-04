import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from "@aws/dynamodb-data-mapper-annotations";

@table("product")
export class ProductModel {
  @rangeKey()
  name: string;

  @hashKey()
  description: string;

  @attribute()
  price: number;
}
