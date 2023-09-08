import {  Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { User } from "./user.entity";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'post' })
export class Post extends BaseEntity {

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "varchar" })
    content: string;

    @ManyToMany(() => User, (user) => user.posts)
     users: User[];

}