import { IsString } from "class-validator";



export class ProductCreateDto {
    @IsString()
    name:string

    @IsString()
    userId: string

    @IsString()
    categoryId: string
}