import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions  = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '504201',
    database: 'board-proj',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}