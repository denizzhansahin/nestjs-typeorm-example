import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Get()
     async product() {
        return await this.productService.all()
    }


    @Get('byProductId/:productId')
    async byProductId(@Param('productId') productId: string) {
       return await this.productService.byProductId(productId)
   }

    
    @Get('category/:catId')
    async byCategoryId(@Param('catId') catId: string) {
       return await this.productService.byCategoryId(catId)
   }


    async activeProduct() {
        return await this.productService.all()
     }


    @Post()
    create(@Body() productCreateDto: ProductCreateDto) {
        console.log(productCreateDto)
        return this.productService.create(productCreateDto)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() productCreateDto: ProductCreateDto) {
        console.log(productCreateDto)
        return this.productService.update(productCreateDto)
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.productService.delete(id)
    }
}
