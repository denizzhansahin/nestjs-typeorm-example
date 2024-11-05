import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category-create-update.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly catService:CategoryService){}
    @Get()
    async getAll(){
        return await this.catService.getAll()
    }

    @Post()
    async create(@Body() category:CategoryCreateDto) {
        return await this.catService.create(category)
    }

    @Patch(":categoryId")
    async update(@Param('categoryId') categoryId:string,@Body() category:CategoryCreateDto) {
        return await this.catService.update(categoryId,category)
    }


    @Delete(":categoryId")
    async delete(@Param('categoryId') categoryId:string) {
        return await this.catService.delete(categoryId)
    }
}
