import { Controller, Body, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
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

    @Get('/:id') //쿼리구문을 파싱하기 위해 Param을 사용
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe) //핸들러 레벨 유효성체크(빌트인)
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/:status') // 특정 id
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ) {
        console.log("doyunz");
        return this.boardsService.updateBoardStatus(id, status)
    }
}
