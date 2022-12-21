import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, Unique, IsNull, OneToMany } from 'typeorm';
import { AuthCredential } from './types/AuthCredential';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/tasks/task.entity';

@Entity()
@Unique(['username'])
export class Auth extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Task, task => task.user, { eager: true })
    tasks : Task[]

}