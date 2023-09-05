// base.entity.ts
import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'date', nullable: true })
    createdAt: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    createdBy: string;

    @CreateDateColumn({ type: 'date', nullable: true })
    lastChangedAt: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    lastChangedBy: string;
}