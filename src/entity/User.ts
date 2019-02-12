import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Quiz } from "./Quiz";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Quiz, quiz => quiz.user )
    quizes: Quiz[];
}
