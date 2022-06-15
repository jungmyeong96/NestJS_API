import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), //루트설정
    BoardsModule]
})
export class AppModule {}
