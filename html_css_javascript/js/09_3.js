const userList = [
    { id: 1, username: "aaa", },
    { id: 2, username: "bbb", },
    { id: 3, username: "ccc", },
    { id: 4, username: "ddd", },
    { id: 5, username: "eee", },
];

function findUserById(id) {
    return userList.find(user => user.id === id);
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        const foundUser = findUserById(id);
        if(!!foundUser) {
            resolve(foundUser);
        } else {
            reject(new Error("해당 id의 사용자를 찾을 수 없습니다"));
        }
    })
};

// 30 + 31 라인과 같은 동작
// getUserById가 원래 return 하는건 Promise이지만
// await을 붙여주면 Promise의 then에서 받을 값을 변수에 넣어준다
let user1 = await getUserById(1);   
console.log("user1 :", user1);
  
getUserById(1)
.then(result => user1 = result)
.catch(error => console.error(error));
getUserById(5)
.then(result => console.log(result))
.catch(error => console.error(error));

// async로 정의 하면 함수 내부에 있는 return 과 무관하게 무조건 promise를 return함 -> 함수에 then, catch 붙일수 있음
// 정상적으로 return 되면 resolve로 넘어가고 thorw로 예외가 발생하면 reject로 넘어감
async function getUserById2(id) {   
    const foundUser = findUserById(id);
    if(!foundUser) {throw new Error("해당 id의 사용자를 찾을 수 없습니다");}
    return foundUser;
}

getUserById2(2)
.then(result => console.log(result))
.catch(error => console.error(error));
getUserById2(6)
.then(result => console.log(result))
.catch(error => console.error(error));