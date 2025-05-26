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
-----------------
#### SELECT(데이터 조회)
	SELECT 컬럼1, 컬럼2 FROM 테이블명;
    
    AS		Column의 이름을 바꿔서 출력해줌
    UNION	SELECT 결과들을 합치기
    제약조건
        1. Column의 개수가 일치해야 한다
        2. 테이블을 SELECT한 결과를 합치려면 자료형도 일치해야 한다
        + 중복된 데이터는 자동으로 합쳐서 출력해 준다 (전부 출력할려면 UNION ALL)
------------------
#### JOIN	테이블 합치기
    SELECT * FROM 테이블1 JOIN 테이블2
    
        JOIN ( == INNER JOIN) 				-> 교집합
        LEFT JOIN  ( == LEFT OUTER JOIN)	-> 왼쪽에 있는건 전부 다 출력
        RIGHT JOIN ( == RIGHT OUTER JOIN)	-> 오른쪽에 있는건 전부 다 출력
        (벤다이어그램 참고)
    
    테이블 명 뒤에 AS 쓸때는 AS 생략 (권장사항)
    JOIN은 반복문이다
#### 서브 쿼리 ( 하위 쿼리 )
    sql 문법 안에서 다시 SELECT 쓰기
---------------------
#### UPDATE ( 데이터 수정 )
    UPDATE 테이블명 SET 칼럼1 = 수정값, 칼럼2 = 수정값 WHERE 조건
--------------------
#### DELETE ( 데이터 삭제 )
    DELETE FROM 테이블명 WHERE 조건

------------
#### 쿼리 성능 비교
    EXPLAIN ANALYZE -> 실행 시킬때 걸린 시간을 보여줌

### 20250523
#### 정규화 ( 중복 제거 )
    1. DISTINCT ( 행의 조합 테이터가 동일한 행을 제거해줌 )
    2. GROUP BY ( SELECT절과 상관 없이 GROUP BY 절에서 Column을 선택하여 중복 제거 )
-----------
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
-------
#### 조건 연산자
    AND , OR
    BETWEEN 값1 AND 값2
    IF (조건, true 일시 결과, false 일시 결과)
    IS NOT NULL
    NOT 은 IS NOT이 아니면 조건의 맨 앞에 붙는다

### 20250526
    @GeneratedValue(strategy = GenerationType.IDENTITY) // = AutoIncrement
    DB는 대소문자 구분 X