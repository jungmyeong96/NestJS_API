import { Controller, Body, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';


@Controller('boards')
export class BoardsController {
    /* 생성자 구버전 */
    // boardsService: BoardsService;

    //  constructor(boardsService: BoardsService) {
    //     this.boardsService = boardsService;
    // }
    constructor(private boardsService: BoardsService) {}

    /* 파일시스템 라우터 */
    // @Get('/')
    // getAllBoard(): Board[] { //타입을 정의해주는 것은 선택사항이지만 타입을 정의해주므로서 원하는 타입과 다른 코드를 사용할 시 에러가 발생합니다.
    //     return this.boardsService.getAllBoards();
    // }

    // @Get('/:id') //쿼리구문을 파싱하기 위해 Param을 사용
    // getBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id);
    // }

    // @Post()
    // @UsePipes(ValidationPipe) //핸들러 레벨 유효성체크(빌트인)
    // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status') // 특정 id
    // updateBoardStatus(
    //     @Param('id') id: string, //다중파라미터를 받으려면 @param id: string[]
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ) {
    //     return this.boardsService.updateBoardStatus(id, status)
    // }


}
