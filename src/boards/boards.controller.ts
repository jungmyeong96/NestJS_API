import { Controller, Body, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    /* 생성자 구버전 */
    // boardsService: BoardsService;

    // constructor(boardsService: BoardsService) {
    //     this.boardsService = boardsService;
    // }
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    getAllBoard(): Board[] { //타입을 정의해주는 것은 선택사항이지만 타입을 정의해주므로서 원하는 타입과 다른 코드를 사용할 시 에러가 발생합니다.
        return this.boardsService.getAllBoards();
    }

    @Post() 
    createBoard(
        @Body() creadBoardDto: CreateBoardDto //데이터 처리를 간편하게 하기위해 객체(DTO) 전달
    ): Board { //NestJS에서는 @Body body를 통해 데이터를 가져옴 하나의 데이터를 찾으려면 @Body(key)
        return this.boardsService.createBoard(creadBoardDto)
    }
}
