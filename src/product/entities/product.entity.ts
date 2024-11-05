import { Category } from "src/category/entities/category.entity";
import { BaseEntity1 } from "src/entities/deniz.base.entity";
import { User } from "src/user/entities/user.entity";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Product extends BaseEntity1{
    //@PrimaryColumn()
    //id: string;
    
    @Column()
    name:string;

    @ManyToOne(()=>User, (user)=>user.products)
    user:User

    @ManyToOne(()=>Category,{nullable:true})
    category?:Category

    @Column()
    categoryId: string

    /*
    @CreateDateColumn()
    createdAt!:Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
    */
}