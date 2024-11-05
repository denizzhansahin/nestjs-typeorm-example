import { BaseEntity1 } from "src/entities/deniz.base.entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Category extends BaseEntity1 {
    @Column()
    name:string;
}