// 같은 기능을 하는 함수
function getData1(isError) {
    return new Promise((resolve, reject) => {
        if(isError) {
            reject(new Error("오류"));
            return;
        }
        resolve("데이터");
    });
}

async function getData2(isError) {
    if (isError) { throw new Error("오류"); }
    return "데이터";
}

getData1(false).then(r => console.log(r)).catch(e => console.error(e));
getData2(false).then(r => console.log(r)).catch(e => console.error(e));

(async () => {
    try {
        console.log(await getData2(false));
    } catch(e) {
        console.error(e);
    }
})();