import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Task } from "./task.entity";
import { User } from "./user.entity";


@Entity({ name: 'category' })
export class Category extends BaseEntity {

    @Column({ type: 'varchar' })
    name: string;
    @OneToMany(() => User, (user) => user.category)
    user: User;
    @OneToMany(() => Task, (task) => task.category)
    tasks: Task[];
}
