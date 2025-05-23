/*
	조건 연산자
    AND , OR
    BETWEEN 값1 AND 값2
    IF (조건, true 일시 결과, false 일시 결과)
    IS NOT NULL
    NOT 은 IS NOT이 아니면 조건의 맨 앞에 붙는다
*/
SELECT
	*
FROM
	product_tb
WHERE
	price > 500000
    AND
    stock > 400;


SELECT
	*
FROM
	product_tb
WHERE
	brand_id in (1, 2);
    
    
SELECT
	*
FROM
	product_tb
WHERE
	brand_id IN (SELECT brand_id FROM brand_tb WHERE brand_name IN ('LG', '다이소'));
    
    
SELECT
	*
FROM
	product_tb
WHERE
	price BETWEEN 100000 AND 200000;
    
SELECT
	*
FROM
	(SELECT
		product_name,
		stock,
		IF ( stock = 0, '재고 부족', NULL) AS stock_status
	FROM
		product_tb) temp
WHERE
	NOT stock_status IS NOT NULL;