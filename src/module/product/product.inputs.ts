import { IsNumber, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IProduct } from "../../common/interfaces/product.interface";

@InputType()
export class ProductResponseInput implements IProduct {
  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  description: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsNumber()
  price: number;
}
