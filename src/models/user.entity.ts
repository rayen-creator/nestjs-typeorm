import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";


@Entity({name:'user'})
export class UserEntity extends BaseEntity {

    @Column({ type: "varchar", unique: true })
    username: string;
    @Column({ type: "varchar", unique: true })
    email: string;
    @Column({ type: "varchar" })
    password: string;

    //  tasks: Task[] 
}
