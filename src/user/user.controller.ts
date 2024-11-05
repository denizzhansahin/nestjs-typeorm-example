import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {

    //sadece bu class içinden erişilebilir
    constructor(private readonly userService: UserService) { }

    @Get()
    finAll() {
        return this.userService.findAll()
    }

    @Get("onceki")
    activeUsers() {
        return this.userService.activeUsers()
    }

    @Post()//veri gönderme isteği yaptık
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }


    @Put(':id')//veri gönderme isteği yaptık
    update(
        @Param('id') userId: string,
        @Body() updateUserDto: UpdateUserDto) {
        updateUserDto.id = userId;
        return this.userService.update(updateUserDto)
    }


    @Delete(':id')//veri gönderme isteği yaptık
    delete(@Param('id') userId: string,)
        
        {
            return this.userService.delete(userId)
        
    }

    //biraz hatalı gibi, doğrudan veri katmanından veri alma, service oluştur.
    /*
    @Get()
    activeUsers(){
        return [
            {id:1,name:"Uzi"},
            {id:2,name:"Uzi"},
        ]

    }
    */
}
