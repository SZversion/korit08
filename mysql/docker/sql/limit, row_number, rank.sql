/*
	LIMIT ( 행의 개수를 제한)
*/

SELECT
	*
FROM
	product_tb
LIMIT 0, 10; # index num 0 부터 10개 출력

/*
	ROW_NUMBER
    ROW_NUMBER 는 OVER 와 함께 쓰임		->		SELECT 의 결과값에 번호를 매겨주는것
	PARTITION BY 기준을 정해서 그 범위 안에서만 번호를 매겨줌
    
    RANK()
    RANK 도 OVER 와 같이 쓰임
    ROW_NUMER와 다르게 공동번호를 매길 수 있음
    DENSE_RANK 공동 순위가 생겨도 다음 순위를 뛰어넘지 않음
*/
SELECT
	*
FROM (
	SELECT
		ROW_NUMBER() OVER(PARTITION BY bt.brand_id ORDER BY brand_id, max(pt.price) DESC) AS number,	# 브랜드 아이디별로 나눠서 번호 매기고 브랜드 이름, 가격 높은순으로 정렬해라
		bt.brand_id,
		bt.brand_name,
		pt.product_name,
		max(pt.price) AS max_price
	FROM
		brand_tb bt
		INNER JOIN product_tb pt ON (pt.brand_id = bt.brand_id)		# 브랜드 이름 가져오기 위해서 JOIN
	GROUP BY
		bt.brand_id,	#브랜드 아이디 중복제거
		pt.product_name	#제품명 중복제거		-> 같은 브랜드의 같은 제품 중복 제거
	ORDER BY
		brand_id )tbt
WHERE
	tbt.number = 1;
    
SELECT
	*
FROM (
	SELECT
		ROW_NUMBER() OVER(PARTITION BY bt.brand_id ORDER BY brand_id, max(pt.price) DESC) AS number,
		bt.brand_id,
		bt.brand_name,
		pt.product_name,
		max(pt.price) AS max_price
	FROM
		brand_tb bt
		INNER JOIN product_tb pt ON (pt.brand_id = bt.brand_id)
	GROUP BY
		bt.brand_id,
		pt.product_name
	ORDER BY
		brand_id )tbt
WHERE
	tbt.number = 1;
    

SELECT
	DENSE_RANK() over(PARTITION BY brand_name ORDER BY brand_name, max(stock)) AS `rank`,
    bt.brand_name,
    product_name,
    max(stock) AS max_stock
FROM
	brand_tb bt
    LEFT OUTER JOIN product_tb pt ON (pt.brand_id = bt.brand_id)
GROUP BY
	bt.brand_id,
	pt.product_name;