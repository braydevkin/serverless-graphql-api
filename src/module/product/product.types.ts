import { Field, ObjectType } from "type-graphql";
import { IProduct } from "../../common/interfaces/product.interface";

@ObjectType()
export class ProductType implements IProduct {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;
}
