
/* 구버전 파일시스템 데이터모델 */
// export interface Board {
//     id?: string;
//     title: string;
//     description: string;
//     status: BoardStatus; //공개글인지 비공개글인지 체크
// }

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}