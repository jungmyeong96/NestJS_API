import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    /* 생성자 구버전 */
    // boardsService: BoardsService;

    // constructor(boardsService: BoardsService) {
    //     this.boardsService = boardsService;
    // }
    constructor(private boardsService: BoardsService) {}
}
