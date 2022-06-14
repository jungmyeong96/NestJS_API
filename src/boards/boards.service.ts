import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = []; //private로 다른 컴포넌트에서 사용하는 것을 막아줌 보안목적
                                    //파일시스템으로 임시저장
    /* Read */
    getAllBoards(): Board[] {
        return this.boards;
    }

    /* Create */
    createBoard(creadBoardDto: CreateBoardDto): Board {
        //const title = creadBoardDto.title;
        //const description = creadBoardDto.description;
        const { title, description } = creadBoardDto;
        
        const board : Board = {//Typescript에서는 key/value값이 같을 경우 value생략가능
            id: uuid(), //유니크한 값 생성가능
            title: title,
            description: description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board; //어떤 정보인지 찍어주기위해 값을 리턴
    }

    /* */
}
