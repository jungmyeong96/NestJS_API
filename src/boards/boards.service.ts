import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = []; //다른 컴포넌트에서 사용하는 것을 막아줌

    getAllBoards() {
        return this.boards;
    }
}
