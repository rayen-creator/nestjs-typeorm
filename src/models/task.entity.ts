import { Column, Entity } from "typeorm"
import { BaseEntity } from "./base.entity"



@Entity({name:'task'})
export class TaskEntity extends BaseEntity {
    @Column({ type: "varchar" })
    title: string
    @Column({ type: "varchar" })
    description: string
    @Column({ type: "date" })
    dueDate: Date
    @Column({ type: "varchar" })
    priority: string

    //  category: Category 
}
