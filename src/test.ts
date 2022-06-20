function testPromise(msg: string) {
        let ms: number = Math.floor(Math.random() * 1000) + 1;
        return new Promise((resolve) => {
                setTimeout(resolve, ms, msg);
        }).then((v) => {
                console.log(v, ms + "ms");
        });}// 비동기 함수의 동기식 처리를 위해 먼저 함수명 앞에 'async'를 표기
    // 그 후 순차적으로 값을 받을 함수앞에 'await'를 표기하여 값을 받아온다.
    async function asyncAwaitTest() {
            let start = new Date().getTime();
             await testPromise("a");
                testPromise("b");
            await testPromise("c");
            let end = new Date().getTime();
            console.log(`시간 : ${end} - ${start} ms`, end - start);
    }
        
    asyncAwaitTest();
