/*
	UPDATE ( 데이터 수정 )
    UPDATE 테이블명 SET 칼럼1 = 수정값, 칼럼2 = 수정값 WHERE 조건
*/

UPDATE
	class_tb
	JOIN class_register_tb crt ON ( crt.class_id = ct.class_id )
SET
	class_name = 'java 중급'
WHERE
	class_id = 1;
SELECT * FROM class_tb;