import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { BaseEntity1 } from "src/entities/deniz.base.entity";
import { Product } from "src/product/entities/product.entity";

@Entity()
export class User extends BaseEntity1 {
 
    //@PrimaryColumn()
    //id: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    birthday: Date

    @OneToMany(()=>Product, (product)=>product.user)
    products:Product[]

    /*
    @CreateDateColumn()
    createdAt!:Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
    */
}