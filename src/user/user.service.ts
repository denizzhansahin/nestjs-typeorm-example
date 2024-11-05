import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {v4 as uuidv4} from "uuid"
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {

    
    logger: any;

    
        constructor(
            @InjectRepository(User)
            private readonly userRepository: Repository<User>) {

        }


        async activeUsers() //tüm kullanıcıları getirme
        {
            return await this.userRepository.find()
        }

/**

 *     activeUsers() {
        return [
            { id: 1, name: 'Uzi' },
            { id: 2, name: 'Uzi' },
        ];
    }
 */

    findAll(): Promise<User[]> {
        return this.userRepository.find();
      }

    //veri alma isteği yaptık
    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepository.create(createUserDto)
        newUser.id =  uuidv4();
        newUser.email = createUserDto.email;
        newUser.name = createUserDto.name;
        newUser.birthday = createUserDto.birthday;
        await this.userRepository.save(newUser);
        //this.logger.warn(JSON.stringify(newUser));
        
        return { message: 'Saved', newUser };
    }


    async update(updateUserDto: UpdateUserDto) {//veri güncelleme için
        const user = await this.userRepository.findOne({
            where:{
                id:updateUserDto.id,
            }
        })


        if(user){
            user.name = updateUserDto.name;
            user.email = updateUserDto.email;
        }else{

        }

        return await this.userRepository.save(user)
        
    }


    async delete(userId: string) {//silme
        return await this.userRepository.softDelete(userId)
    }
}
