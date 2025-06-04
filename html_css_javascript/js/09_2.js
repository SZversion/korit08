function requestBackend(isOk) {
    if(isOk) {
        return {status: 200, body: "정상적인 데이터 응답"};
    }
    return {status: 400, body: "오류 데이터 응답"};
}

const p1 = new Promise ((resolve, reject) => {
    console.log("p1 프로미스 생성");
    const { status, body } = requestBackend(true);
    if ( status === 200 ) {
        resolve(body);
    } else if ( status === 400 ) {
        reject(new Error(body));
    }
});

p1.catch(reponseBody => {
    console.log("p1 :", reponseBody);
    return "p1 result"
}).then(result => {
    console.log("p1-2 :", result);
    return "p1-2 리턴값"
}).then(result => {
    console.log("p1-3 :", result);
}).catch(error => {
    console.log("p1 :", error);
});

const p2 = new Promise ((resolve, reject) => {
    console.log("p2 프로미스 생성");
    const { status, body } = requestBackend(false);
    if ( status === 200 ) {
        resolve(body);
    } else if ( status === 400 ) {
        reject(new Error(body));
    }
});

p2.then(reponseBody => {    //then 이 큐에 등록은 되었지만 resolve가 없어서 순서가 생략됨
    console.log("p2 :", reponseBody);
}).catch(error => {
    console.log("p2 :", error);
});

const p3 = new Promise ((resolve, reject) => {
    console.log("p3 프로미스 생성");
    const { status, body } = requestBackend(true);
    if ( status === 200 ) {
        resolve(body);
    } else if ( status === 400 ) {
        reject(new Error(body));
    }
});

p3.then(reponseBody => {
    console.log("p3 :", reponseBody);
}).catch(error => {
    console.log("p3 :", error);
});

/*
    비동기 함수들은 실행시 동기 순서로 큐에 등록이 되고 동기 동작이 끝나면 큐에 등록된 비동기 동작들이 실행됨
    resolve 와 reject는 then과 catch에 parameter를 그대로 넘겨주고 then, catch 에서 정의한 함수에서 값들을 처리함
    then 과 catch가 실행되면 then 이 우선적으로 실행 됨
*/