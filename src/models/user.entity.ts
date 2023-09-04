import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Task } from "./task.entity";
import { Category } from "./category.entity";


@Entity({ name: 'user' })
export class User extends BaseEntity {

    @Column({ type: "varchar", unique: true })
    username: string;
    @Column({ type: "varchar", unique: true })
    email: string;
    @Column({ type: "varchar" })
    password: string;
    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
    @OneToMany(() => Category, (category) => category.user)
    category: Category;
}
