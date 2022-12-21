import { Auth } from 'src/auth/auth.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ default: "Default description" })
    descriptionAgain: string

    @Column({ default: "OPEN" })
    status: TaskStatus

    @ManyToOne(type => Auth, user => user.tasks, { eager: false })
    user: Auth

    @Column()
    userId: number

}