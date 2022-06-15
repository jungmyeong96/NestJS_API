import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";

@Entity()
export class Board extends BaseEntity { //create를 쉽게 만들게 도와줌 entity class는 데이터베이스로 변환되는 클래스
    @PrimaryGeneratedColumn()
    id: number; //기본키

    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    status: BoardStatus;
}