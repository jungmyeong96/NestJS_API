import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  //  private boards: Board[] = []; //private로 다른 컴포넌트에서 사용하는 것을 막아줌 보안목적
                                    //파일시스템으로 임시저장 레포지토리 대신

    constructor(
        @InjectRepository(Board)//원래는 인자가 되어야하는데 private를 사용하면 암묵적으로 property가 됨
        private boardRepository: Repository<Board> //레포지토리를 나누는 경우 에러발생해서 서비스에 종속성 심어줌
    ) {}

     /* Read */
    async getBoardById(id: number): Promise <Board> { //디비에서 데이터 꺼내올때 오래걸리기 때문에 비동기처리
        const found = await this.boardRepository.findOneBy({id}); //버전바뀜

        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        return found;
    }
    
    async getAllBoard(): Promise <Board[]> {
        return this.boardRepository.find();
    }

    /* Create */
    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        //const title = creadBoardDto.title;
        //const description = creadBoardDto.description;
        const { title, description } = createBoardDto; //DTO적용

        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        })

        await this.boardRepository.save(board);
        return board;
    }

    /* Delete */
    //remove() vs delete()
    //remove는 무조건 존재하는 아이템을 remove 메소드를 이용해서 지워야합니다.
    //delete는 만약 아이템이 존재하면 지우고 존재하지 않으면 아무런 영향이 없습니다.
    //remove는 db에 두번 접근해야해서 비효율적이므로 delete사용
    async deleteBoard(id: number): Promise<void> {
        const result = await this.boardRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
    }


    /* Update */
   async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
       const board = await this.getBoardById(id);

       board.status = status;
       await this.boardRepository.save(board);

       return board;
   }


    /* 파일시스템 */

    // /* Read */
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if (!found) {
    //         throw new NotFoundException("Can't find Board with id"); //nestJS안에 이미 만들어져있는 인스턴스
    //     }

    //     return found;
    // }

    // /* Create */
    // createBoard(creadBoardDto: CreateBoardDto): Board {
    //     //const title = creadBoardDto.title;
    //     //const description = creadBoardDto.description;
    //     const { title, description } = creadBoardDto; //DTO적용

    //     const board : Board = {//Typescript에서는 key/value값이 같을 경우 value생략가능
    //         id: uuid(), //유니크한 값 생성가능
    //         title: title,
    //         description: description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board; //어떤 정보인지 찍어주기위해 값을 리턴
    // }

    // /* Delete */
    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // /* Update */
    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }


}
