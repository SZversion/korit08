/*
	INSERT(데이터 삽입)
    INSERT INTO 테이블명(컬럼1, 컬럼2, ...) VALUES (컬럼1 데이터, 컬럼2 데이터, ...)
    데이터를 순서대로 전부 입력하면 컬럼명은 생략 할 수 있다 (line 8)
    컬럼을 선택해서 값을 추가 할 수 있다 이때 생략된 값은 null로 들어간다 (line 9)
*/
INSERT INTO `db_study`.`student_tb`(`student_name`, `student_age`) VALUES ('rlark', 25);
INSERT INTO student_tb VALUES ('rlark', 25);
INSERT INTO student_tb(student_age) VALUES (25);

/*
	여러줄 데이터 삽입
    INSERT INTO 테이블명(컬럼1, 컬럼2, ...) VALUES (컬럼1 데이터, 컬럼2 데이터, ...),(컬럼1 데이터, 컬럼2 데이터, ...)
    세미콜론으로 끝나기 때문에 코드 한줄을 여러줄로 표현 가능
*/
INSERT INTO student_tb
VALUES ('rlark', 25),
('qkrrk',32);

/*------------------------------------------------------------*/
INSERT INTO class_tb VALUES(default, 'python', 20000);
INSERT INTO student_tb 
VALUES	
	(DEFAULT, '김민수', 22),
	(DEFAULT, '이서연', 24),
	(DEFAULT, '박지훈', 21),
	(DEFAULT, '최유진', 23),
	(DEFAULT, '정예은', 26),
	(DEFAULT, '홍길동', 20),
	(DEFAULT, '신유나', 19),
	(DEFAULT, '김도윤', 25),
	(DEFAULT, '오하늘', 22),
	(DEFAULT, '배수현', 27);
    
SELECT * FROM student_tb;

INSERT INTO class_register_tb
	VALUES
		(default, 3, 2),
		(default, 1, 3),
		(default, 3, 4),
		(default, 3, 5),
		(default, 2, 6),
		(default, 1, 7),
		(default, 1, 8),
		(default, 2, 9),
		(default, 3, 10),
		(default, 1, 11);

SELECT * FROM class_register_tb;