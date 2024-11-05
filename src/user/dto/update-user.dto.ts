import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "./create-user.dto";

//verilerin türlerini belirledik
export class UpdateUserDto extends CreateUserDto{
    id: string;

}