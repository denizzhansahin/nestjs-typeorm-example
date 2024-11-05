import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsAdult } from "./user.validation";

//verilerin türlerini belirledik
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    
    @IsString()
    @IsAdult({message:"Kayıt için 18 yaşından büyük olmalı"})//kendi kontrol tanımlama ekleme
    birthday:Date;
}