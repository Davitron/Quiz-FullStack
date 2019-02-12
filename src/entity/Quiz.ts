import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { DifficultyType, QuizType } from '../enum/Enum';
import { User } from "./User";


@Entity()
export class Quiz {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    score: number;

    @Column()
    questionCount: number;

    @Column({
      type: "enum",
      enum: ["easy", "medium", "hard"],
      default: "easy"
    })
    Difficulty: DifficultyType

    @Column({
      type: "enum",
      enum: ["boolean", "multiple"],
      default: "multiple"
    })
    type: QuizType

    @ManyToOne(type => User, user => user.quizes)
    user: User
}
