import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Task } from "./task.entity";
import { Category } from "./category.entity";
import { Post } from "./post.entity";


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

    @ManyToMany(() => Post, (post) => post.users)
    @JoinTable({
        name: 'user_post',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'post_id',
            referencedColumnName: 'id',
        },
    })
    posts: Post[];
}
