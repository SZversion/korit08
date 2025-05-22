/*
	SELECT(데이터 조회)
	SELECT 컬럼1, 컬럼2 FROM 테이블명;
    
    AS		Column의 이름을 바꿔서 출력해줌
    
    UNION	SELECT 결과들을 합치기
    제약조건
    1. Column의 개수가 일치해야 한다
    2. 테이블을 SELECT한 결과를 합치려면 자료형도 일치해야 한다
    + 중복된 데이터는 자동으로 합쳐서 출력해 준다 (전부 출력할려면 UNION ALL)
*/
SELECT student_name FROM student_tb WHERE student_age > 25;
SELECT 10 as number;		-- SELECT 는 TABLE 을 리턴함
SELECT * FROM (SELECT 10 + 20 AS number2, 40 as number3) as n_tb;
SELECT * FROM (
	SELECT 10 + 20 AS number2, 40 as number3
    UNION SELECT 50 AS number2, 60 as number3
    ) as n_tb;
SELECT 10, 20 UNION SELECT 10, 20;
SELECT 10, 20 UNION ALL SELECT 10, 20;

/*------------------------------------------------------------*/

/*
	JOIN	테이블 합치기
    SELECT * FROM 테이블1 JOIN 테이블2
    
    JOIN ( == INNER JOIN) 				-> 교집합
    LEFT JOIN  ( == LEFT OUTER JOIN)	-> 왼쪽에 있는건 전부 다 출력
    RIGHT JOIN ( == RIGHT OUTER JOIN)	-> 오른쪽에 있는건 전부 다 출력
    (벤다이어그램 참고)
    
    테이블 명 뒤에 AS 쓸때는 AS 생략 (권장사항)
    JOIN은 반복문이다
*/
SELECT * FROM student_tb AS st1 JOIN student_tb AS st2;
SELECT
	*
FROM
	student_tb /*AS*/ st1
    INNER JOIN student_tb /*AS*/st2 ON(st2.student_id = st1.student_id + 1)
    INNER JOIN student_tb /*AS*/st3 ON(st3.student_id = st2.student_id + 1);

SELECT
	*
FROM
	student_tb AS st1
    LEFT JOIN student_tb /*AS*/ st2 ON(st2.student_id = st1.student_id + 1)
    LEFT JOIN student_tb /*AS*/ st3 ON(st3.student_id = st2.student_id + 1);
    
/*
	서브 쿼리 ( 하위 쿼리 )
    sql 문법 안에서 다시 SELECT 쓰기
*/
    
SELECT
	class_register_id, 
    crt.class_id, 
    crt.student_id, 
    student_name,
    class_name    
FROM
	class_register_tb crt
    JOIN class_tb ct ON ( ct.class_id = crt.class_id )
    JOIN student_tb st ON ( st.student_id = crt.student_id )
WHERE
	st.student_name = '이서연';

-- student_tb 에서 이름이 '이서연'인 사람의 id를 들고와서 class_register_tb에서 그 id 랑 맞는 데이터 출력해
SELECT
	*,
    (SELECT student_name FROM student_tb st WHERE st.student_id = crt.student_id) AS student_name,
    (SELECT class_name FROM class_tb ct WHERE ct.class_id = crt.class_id) AS class_name
FROM
	class_register_tb crt
WHERE 
	student_id = (
		SELECT
			student_id
		FROM
			student_tb
		WHERE
			student_name = '이서연'
	);

/*
쿼리 성능 비교
EXPLAIN ANALYZE -> 실행 시킬때 걸린 시간을 보여줌
*/