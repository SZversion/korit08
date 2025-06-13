79GUH-ZDECP-YPLX8-FLFU9-V96AR

### 20250513

    똑같은거
    double num = new int 10;
    int num2 = (int)num;

    double(실수)은 int(정수)보다 상위 개념 (상위 클래스) 이므로 int 값을 double에 대입 할 수 있다.
    하지만 double을 int에 대입 하려면 'int형 아닌고 double 인거 아는데 그냥 int로 변환해서 넣어라' 라고 말해줘야 넣을수있다.

    Machine something1 = new Computer();
    Phone something2 = (Phone)something1;
    컴퓨터를 기계로 추상화 해서 기계로 업캐스팅이 가능하지만
    그 기계를 다시 핸드폰으로 다운캐스팅하지는 못한다
    같은 기계이기는 해도 서로 다른거니까

### 20250514

    와일드카드 <?>의 제약 조건
    1. extends <? extends Class>
        이 Class와 Class를 상속받은 놈들만 사용 가능하다
        ex) Student를 상속받는 HighStudent와 AcademyStudent가 있으면
        <? extends Student> 하면 Student 를 상속받은 HighStudent 와 AcademyStudent 만 사용 가능
    2. super <? super Class>
        이 Class가 상속받고 있는 놈들만 사용 가능하다
        ex) Student를 상속받는 HighStudent와 AcademyStudent가 있으면
        <? super HighStudent> 하면 HighStudent 에게 상속해 주는 Student 만 사용 가능

### 20250515

#### Stream

    스트림 구성
        1 단계 -> 스트림 생성
        2 단계 -> 중간 연산 (조건에 맞는 데이터 구분, 데이타 값 수정, 정렬, 중복 제거, 제한, 건너뛰기) -> 스트림을 return 해주는 연산들
        3 단계 -> 최종 연산 (반복, 결과 수집, 개수 조회, 매칭 여부, 검색, 합산) -> 스트림 외에 다른 자료형을 return 하는 연산들

    스트림 특징 -> 반복 중 뒤로 돌아갈 수 없다 (일회용이다)
        numStream.forEach();     ->   이게 실행되면 스트림에서 값을 꺼내서 사용했기 때문에 이미 메모리는 비워진 상태임
        numStream.findFirst();   ->   메모리에 남아있는게 없어서 실행 할 수 없음

### 20250519

    @ResponseBody   // 데이터로 응답하겠다, ViewResolver를 거치지 않겠다, 없으면 파일경로로 응답하겠다는 뜻

    HttpServletRequest 객체란?
    외부에서 Tomcat 웹 서버로 요청시 생성되는 요청정보객체이다.

### 20250520

#### GET : 주소에 값을 입력한다

    파라미터를 통해 값을 입력한다
    파라미터는 주소의 ? 뒤에 따라오는 key value 를 의미한다, 여러개 요청 시 & 로 구분
    ex) http://localhost:8081/api/name2?name=qwer&age=20

#### POST : 가능한 json 으로 값을 입력한다

    post 응답을 받으려면 @RequestBody 필수
    ex)
    "{
        "key1" : "value1",
        "key2" : "value2",
        "key3" : {
                key4 : value3,
                key5 : ["a", "b", "c"]
        }
    }"

#### PUT : json 으로 값을 입력한다

#### DELETE : 경로에 값을 입력한다

#### TIPS

    @ResponseBody
    데이터로 응답하겠다, ViewResolver를 거치지 않겠다, 없으면 파일경로로 응답하겠다는 뜻

    controller.IoCController
    @Component + @AllargsConstructor
    @Component 가 달려있으면 필요한 부품들(클래스 객체들)을 자동으로 생성해서 대입후 객체를 생성 해 준다
        같은 기능을 하는 객체들을 new 로 만들어서 메모리 낭비하지 않고 알아서 생성해서 공유하며 사용해 준다
    @Autowired      이거 만드는데 다른 부품들 필요 하니까 가져와서 만들어야돼 (@AllArgsConstructor 와 같은 기능)
        @Component로 생성된 객체(부품) = bean

### 20250521

#### Component의 종류

    1. @Component       ->  특정 기능이 정해져 있지 않은 객체
    2. @Controller      ->  HTTP 요청 및 응답을 처리하는 객체
    3. @Service         ->  비즈니스 로직 또는 메인로직을 담당하는 객체
    4. @Repository      ->  DB와 관련된 로직을 담당하는 객체
    5. @Configuration   ->  설정 로직을 담당하는 객체 + 직접생성 후 IoC 등록을 필요로 하는 Bean 설정

    DDL(Data Definition Language) - 데이터를 생성, 삭제하거나 구조를 변경하는 명령어
        ex) CREATE, ALTER, DROP
    DML(Data Manipulation Language) - 데이터를 처리하거나 조회, 검색하는 명령어
        ex) INSERT, SELECT, UPDATE, DELETE
    DCL(Data Control Language) - 데이터의 보안성 및 무결성을 제어하는 명령어(권한 설정 등)
        ex) GRANT, REVOKE

### 20250522

#### INSERT(데이터 삽입)

        INSERT INTO 테이블명(컬럼1, 컬럼2, ...) VALUES (컬럼1 데이터, 컬럼2 데이터, ...)
        데이터를 순서대로 전부 입력하면 컬럼명은 생략 할 수 있다 (line 8)
        컬럼을 선택해서 값을 추가 할 수 있다 이때 생략된 값은 null로 들어간다 (line 9)
    여러줄 데이터 삽입
        INSERT INTO 테이블명(컬럼1, 컬럼2, ...) VALUES (컬럼1 데이터, 컬럼2 데이터, ...),(컬럼1 데이터, 컬럼2 데이터, ...)
        세미콜론으로 끝나기 때문에 코드 한줄을 여러줄로 표현 가능

---

#### SELECT(데이터 조회)

    SELECT 컬럼1, 컬럼2 FROM 테이블명;

    AS		Column의 이름을 바꿔서 출력해줌
    UNION	SELECT 결과들을 합치기
    제약조건
        1. Column의 개수가 일치해야 한다
        2. 테이블을 SELECT한 결과를 합치려면 자료형도 일치해야 한다
        + 중복된 데이터는 자동으로 합쳐서 출력해 준다 (전부 출력할려면 UNION ALL)

---

#### JOIN 테이블 합치기

    SELECT * FROM 테이블1 JOIN 테이블2

        JOIN ( == INNER JOIN) 				-> 교집합
        LEFT JOIN  ( == LEFT OUTER JOIN)	-> 왼쪽에 있는건 전부 다 출력
        RIGHT JOIN ( == RIGHT OUTER JOIN)	-> 오른쪽에 있는건 전부 다 출력
        (벤다이어그램 참고)

    테이블 명 뒤에 AS 쓸때는 AS 생략 (권장사항)
    JOIN은 반복문이다

#### 서브 쿼리 ( 하위 쿼리 )

    sql 문법 안에서 다시 SELECT 쓰기

---

#### UPDATE ( 데이터 수정 )

    UPDATE 테이블명 SET 칼럼1 = 수정값, 칼럼2 = 수정값 WHERE 조건

---

#### DELETE ( 데이터 삭제 )

    DELETE FROM 테이블명 WHERE 조건

---

#### 쿼리 성능 비교

    EXPLAIN ANALYZE -> 실행 시킬때 걸린 시간을 보여줌

### 20250523

#### 정규화 ( 중복 제거 )

    1. DISTINCT ( 행의 조합 테이터가 동일한 행을 제거해줌 )
    2. GROUP BY ( SELECT절과 상관 없이 GROUP BY 절에서 Column을 선택하여 중복 제거 )

---

#### SELECT 실행 순서

    1.  FROM		-> 데이터가 존재하는 테이블을 조회하거나 JOIN 하는 역할
    2.  ON			-> JOIN이 있는 경우에만 JOIN 조건을 평가
    3.  JOIN		-> ON 조건에 해당하는 데이터를 결합하는 역할
    4.  WHERE		-> FROM 에서 조회 할 데이터의 조건을 평가
    5.  GROUP BY 	-> 조회된 결과에서 명시된 Column 끼리 그룹핑 하는 역할
    6.  HAVING		-> 그룹핑 된 결과에서 데이터의 조건을 평가
    7.  SELECT		-> 최종 출력 할 Column을 선택하는 역할
    8.  DISTINCT	-> SELECT 에서 선택한 Column의 조합 결과에서 중복 행 제거하는 역할
    9.  ORDER BY	-> 최종 SELECT의 결과를 오름차순(ASC)또는 내림차순(DESC)으로 결과를 정렬하는 역할
    10. LIMIT		-> 최종 SELECT의 결과의 행 개수는 제한 할 수 있음

---

#### 조건 연산자

    AND , OR
    BETWEEN 값1 AND 값2
    IF (조건, true 일시 결과, false 일시 결과)
    IS NOT NULL
    NOT 은 IS NOT이 아니면 조건의 맨 앞에 붙는다

### 20250526

    @GeneratedValue(strategy = GenerationType.IDENTITY) // = AutoIncrement
    DB는 대소문자 구분 X

### 20250604

#### 배열(Array)

    const arr1 = [];
    const arr2 = new Array();

    arr1.push(10);
    arr1.push(20);
    arr1.push(30);
    arr1.push(40);

    arr2.push(10);
    arr2.push(20);
    arr2.push(30);
    arr2.push(40);

    console.log(arr1);
    console.log(arr2);

    console.log(arr1 == arr2);
    console.log(arr1 === arr2);

    const obj1 = {key1: "value1", key2: "value2"};
    const obj2 = {key1: "value1", key2: "value2"};
    console.log(obj1 === obj2);

    // JSON
    // JS 객체 또는 배열을 JSON 문자열로 변환 -> JSON.stringify();
    // JSON 문자열을 JS객체 또는 배열로 변환  -> JSON.parse();
    const json1 = JSON.stringify(arr1);
    const json2 = JSON.stringify(arr2);
    console.log(json1);
    console.log(json2);
    console.log(json1 === json2);

    // 배열의 기본 내장 함수
    const names = ['name1', 'name2', 'name3'];
    // 값 추가
    names.push('name4');
    // 값 제거
    console.log(names.pop());
    // 값 수정
    names.splice(1, 0, 'name5');    // 1번 index에서 0개 제거하고 name5 추가
    console.log(names);
    // 값 찾기
    const findFx = n => n === 'name5';
    const findName = names.find(findFx);;
    console.log(findName);
    const students = [
        {name: 'name1', age: 31},
        {name: 'name2', age: 32},
        {name: 'name3', age: 33},
        {name: 'name4', age: 34},
        {name: 'name5', age: 35},
    ];
    console.log(students.find(s => s.name === 'name1'));
    // 값 존재 유무
    console.log(names.includes('name5'));   // return true, false

    // 필터링
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers.filter(n => n % 2 == 0));
    console.log(students.filter(students => students.age === 32));

    // 값 변경
    console.log(numbers.map(n => n*10));    // 배열 값들에 반복 실행해서 그 값들을 모아서 새 배열을 만들어서 출력
    console.log(students.map(student => {
        if (student.age === 32) {
            return {
                name: student.name,
            }
        }
        return student;
    }))

##### map 작동 방식

```javascript
function map(array, fx) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push = fx(array[i], i);
  }
  return newArray;
}
```

##### filter 작동 방식

```javascript
const filter = (array, fx) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fx(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
```

#### js의 논리 연산자

    js에서는 AND 조건문의 앞부분이 true이면 연산자 뒷부분의 값을 리턴함
    js에서는 OR 조건문의 앞부분이 flase이면 연산자 뒷부분의 값을 리턴함
    ?? (Nullish coalescing) 조건문의 앞부분이 null, undifined이면 연산자 뒷부분의 값을 리턴함, 아니라면 앞의 값을 리턴

#### Promise

    비동기 함수들은 실행시 동기 순서로 큐에 등록이 되고 동기 동작이 끝나면 큐에 등록된 비동기 동작들이 실행됨
    resolve 와 reject는 then과 catch에 parameter를 그대로 넘겨주고 then, catch 에서 정의한 함수에서 값들을 처리함
    then 과 catch가 실행되면 then 이 우선적으로 실행 됨
    then 이 큐에 등록은 되었는데 resolve가 없으면 다음 순서로 넘어가고 그 then절은 스킵됨

#### async, await

    async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드)
    await 키워드는 async 함수 안에서만 사용 가능, 단 전역 호출은 가능

    async로 정의 하면 함수 내부에 있는 return 과 무관하게 무조건 promise를 return함 -> 함수에 then, catch 붙일수 있음
    정상적으로 return 되면 resolve로 넘어가고 thorw로 예외가 발생하면 reject로 넘어감

    getUserById가 원래 return 하는건 Promise이지만, await을 붙여주면 Promise의 then에서 받을 값을 변수에 넣어준다
    async 없으면 내부에서 await 못씀
    await 쓰면서 catch 쓸거면 try-catch로 오류 제어 해야 함

```javascript
//30 + 31 라인과 같은 동작
let user1 = await getUserById(1);
console.log("user1 :", user1);

getUserById(1).then((result) => (user1 = result));
```

### 20250609

### JSX 의 특징

#### 1. 태그가 열리면 꼭 닫혀야한다

```jsx
<input type="text" />
```

#### 2. 2개 이상의 jsx는 하나의 JSX로 감싸야한다

```jsx
const jsx2 = <div></div><div></div> => ❌
const jsx1 = (
    <div>
    <div></div>
    <div></div>
    </div>
); => ⭕
```

#### 3. 변수, 상수, 리스트, 값 등을 표현하려면 {중괄호}로 감싸서 표현한다

```jsx
const name = "name1";
const age = 23;
const jsx2 = (
  <div>
    <h3>이름 : {name}</h3>
    <h3>나이 : {age + 1}</h3>
  </div>
);
```

#### 4. 2번에서 2개 이상의 jsx는 하나로 감싸야한다고 배움. 이때, 그룹을 위해 만들어진 태그가 있다 => <></>

```jsx
const jsx3 = (
  <>
    <div></div>
    <div></div>
  </>
);
```

#### 자식 요소 전달방법

    1. props 속성을 사용해서 전달
    2. props에 내장되어진 children 속성을 사용해서 전달

### 20250610

#### useState

    useState는 0번 index가 값, 1번 index로 함수를 가진 배열을 리턴해주는 함수
    Class useState<E>() {
        private E value;
        private function();
    } 대충 이런 식

### 20250611

```jsx
// default 는 {중괄호} 안쓰고 바로 import 가능, default는 어차피 하나밖에 없기 때문에 이름도 바꿔서 사용 가능(근데 바꿀 일 없음)
import fxxxxxxx1, { fx2 } from "../ImportStudy/functions";

// 이 파일 안에 있는거 전부 들고와서 f 라는 이름으로 바꿔서 사용
import \* as f from "../ImportStudy/functions";
```

#### 마운트, 언마운트 관리 useEffect

    useEffect -> 마운트(컴포넌트가 호출되어 return 값을 반환해서 화면을 랜더링 할 때) 될때 동작 할 부분을 정의하는 곳
    return -> 언마운트(컴포넌트가 화면에서 사라질 때) 될때 동작 할 부분을 정의하는 곳
    useEffect는 함수 와 배열을 매개변수로 받음 이때 배열에는 바라보는 값을 넣으면 그 값이 변할때만 호출됨

#### Emotion (CSS in JS)

    Emotion (CSS in JS 라이브러리)
    주석으로 @jsxImportSource @emotion/react 추가해야 작동함
    css 객체 import -> css`` 문자열로 css 작성
    자동완성 안되니까 extension 으로 vscode-styled-components 설치

### 20250612

#### JavaScript filter

    filter는 map과 비슷하게 작동하며 return 값이 boolean을 받고 그 값이 true이면 그 요소를 포함하고 false이면 배제한 배열을 반환한다

### 20250613

#### React Router

    useNavigate()는 BrowserRouter 안에서만 작동하기 때문에 상위를 BrowserRouter로 잡아주어야 한다

#### useNavigate

    Link 태그를 사용하지 않아도 함수 안에서 경로를 이동 할 수 있게 해줌

#### useLocation

    location.pathname; // 현재 페이지의 경로를 리턴해줌
    location.search; // 현재 페이지에 입력되는 변수(?뒤의 값) 을 반환함
