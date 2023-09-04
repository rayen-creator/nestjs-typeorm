import { Column, Entity, ManyToOne } from "typeorm"
import { BaseEntity } from "./base.entity"
import { User } from "./user.entity"
import { Category } from "./category.entity"


@Entity({ name: 'task' })
export class Task extends BaseEntity {
    @Column({ type: "varchar" })
    title: string
    @Column({ type: "varchar" })
    description: string
    @Column({ type: "date" })
    dueDate: Date
    @Column({ type: "varchar" })
    priority: string

    @ManyToOne(() => User, (user) => user.tasks)
    user: User

    @ManyToOne(() => Category, (category) => category.tasks)
    category: Category
}
