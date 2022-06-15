import { IsNotEmpty } from "class-validator";

export class CreateBoardDto { //class는 런타임에서 작동하여 interface보다 파이프같은 기능을 사용할 때 유리
    
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}