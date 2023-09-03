import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class Item extends BaseEntity {
    @Column({ type:'varchar' ,length:300})
    name:string;
    @Column({ type:'varchar' ,length:300})
    description:string
}