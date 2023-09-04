import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";



@Entity({ name: 'category' })
export class CategorEntity extends BaseEntity {

    @Column({ type: 'varchar' })
    name: string

    // user: User                         
    //  tasks: Task[] 
}
