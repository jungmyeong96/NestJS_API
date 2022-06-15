import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]) //entity를 던져줌.
  ] ,
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
