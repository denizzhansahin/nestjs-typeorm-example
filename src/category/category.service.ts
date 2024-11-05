import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category-create-update.dto';
import { isDefined } from 'class-validator';
import { CategoryNotFoundException } from 'src/common/exception/category.notfound.exception';

@Injectable()
export class CategoryService {


    constructor(
        @InjectRepository(Category)
        private readonly catRepo: Repository<Category>
    ) { }

    async getAll() {
        const result = await this.catRepo.find()
        return result
    }


    async create(category: CategoryCreateDto) {
        const newCat = new Category()
        newCat.name = category.name
        return await this.catRepo.save(newCat)
    }


    async update(id: string, category:CategoryCreateDto) {
        const findCat = await this.catRepo.findOne({
            where:{
                id,
            }
        })

        if(isDefined(findCat)){
                findCat.name = category.name;
                return await this.catRepo.save(findCat)
        }
        else {
            throw new CategoryNotFoundException(id)
        }
    }


    async delete(categoryId: string) {
        const result = await this.catRepo.softDelete(categoryId)
        return result
    }

}
