/*
    단축 평가 논리 연산
*/

const name = 'name1';
console.log(name && 'name2');
console.log(!!name && !!'name2');
console.log(true && name);
console.log(false && name);
// AND 조건문의 앞부분이 true이면 연산자 뒷부분의 값을 리턴함


console.log(false || 10);
console.log(true || 10);
// OR 조건문의 앞부분이 flase이면 연산자 뒷부분의 값을 리턴함


console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
// ?? (Nullish coalescing) 조건문의 앞부분이 null, undifined이면 연산자 뒷부분의 값을 리턴함, 아니라면 앞의 값을 리턴