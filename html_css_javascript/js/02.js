/*
    일반함수 정의
*/

function 함수명1 (매개변수1, 매개변수2) {
    let 리턴데이터 = "?";
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출");
    return 리턴데이터;  //리턴이 필요할때만 사용
}

const 리턴값 = 함수명1(); //함수를 호출 해서 return 값을 돌려받음
console.log(리턴값);
const 함수명2 = 함수명1;  //함수를 변수에 대입함 == 주소값이 같음
const 리턴값2 = 함수명2(10, 20);
console.log(리턴값2);

//화살표 함수
/*
    1. 매개변수가 하나면 () 괄호 생략 가능
    2. 실행문이 한줄이면 {} 중괄호 생략 가능
    3. {} 중괄호 생략 시 값만 입력하면 return 값이 됨, 즉 {}중괄호 생략을 안하고 return 하려면 return 키워드를 명시해야 함
*/
const 함수명 = (매개변수1, 매개변수2) => {
    let 리턴데이터 = "?";
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출");
    return 리턴데이터;  //리턴이 필요할때만 사용
}

const fx1 = () => console.log("fx1호출");
const fx2 = n => console.log(n, "출력");
const fx3 = n => n + 1;
const fx4 = n => {
    console.log(n, "출력");
    return n + 1;
};
const fx5 = (a, b) => a * b;

console.log("----------------------------------");
fx1();
fx2(2);
console.log(fx3(33));
console.log(fx4(44));
console.log(fx5(5, 55));


console.log("----------------------------------");

const aa = () => {
    console.log("aa function called");
    return "aa function return";
}

const bb = (fxx) => {
    console.log("bb function called");
    return fxx;
}

const aaa = (fxx, fxx2) => {
    console.log("aaa function called");
    console.log(fxx());
    console.log(fxx2());
    return "aaa function return";
}

console.log(aaa(bb(aa), bb(aa)));
console.log("===========");

function sayHello(name, callback) {
    const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';
    
    callback(words);
}

sayHello("인파", (words) => { // 함수의 이름이 없는 익명 함수
	return "words";
});