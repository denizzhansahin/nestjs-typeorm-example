import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';
//import {v4 as uuidv4} from "uuid"

@Injectable()
export class ProductService {


    constructor(
        @InjectRepository(Product)
        private readonly productRepository : Repository<Product>,
    ){}

    async create(productCreateDto:ProductCreateDto) {
        const product = new Product()
        //product.id = uuidv4()
        product.name = productCreateDto.name
        product.category = new Category({id:productCreateDto.categoryId})
        product.categoryId = productCreateDto.categoryId
        const result = await this.productRepository.save(product)
        return result
    }


    async update(productCreateDto:ProductCreateDto) {
        const product = new Product()
        //product.id = uuidv4()
        product.name = productCreateDto.name
        product.user = new User({id: productCreateDto.userId})

        const result = await this.productRepository.save(product)
        return result
    }


    async delete(productId:string) {
        const product = new Product()
        //product.id = uuidv4()
        
        const result = await this.productRepository.softDelete(productId)
        return result
    }

    async all() {
        return await this.productRepository.find()
    }


    async byProductId(productId:string) {
        const result = await this.productRepository.find({
            where:
            {
                id:productId
            },
            relations:["category","user"] //istediğin entity bilgisini de al
        })
        return result
    }


    async byCategoryId(catId:string) {
        const result = await this.productRepository.find({
            where:
            {
                categoryId:catId
            },
            relations:["user"] //istediğin entity bilgisini de al
            ,
            order:{
                createdAt:"DESC"
            }
        })
        return result
    }
    
}
