import { DeepPartial } from "typeorm";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";


@Entity()
export abstract class BaseEntity1 {
    constructor(input?: DeepPartial<any>){
        if(input){
            for (const [key,value] of Object.entries(input)){
                (this as any)[key] = value;
            }
        }
    }
    @PrimaryColumn()
    id: string;

    @BeforeInsert()//önce bunu çalıştır işlemden önce
    async beforeInsert(){
        this.id = v4()
    }

    @CreateDateColumn()
    createdAt!:Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date


}