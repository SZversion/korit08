SELECT
	pt.category_id,
    ct.category_name,
    pt.supplier_id,
    st.supplier_name,
    count(ct.category_id) AS product_count,
    sum(pt.stock) AS total_stock,
    AVG(pt.stock) AS avg_stock
FROM
	product_tb pt
    INNER JOIN category_tb ct ON (ct.category_id = pt.category_id)
    INNER JOIN brand_tb bt ON (bt.brand_id = pt.brand_id)
    INNER JOIN supplier_tb st ON (st.supplier_id= pt.supplier_id)
GROUP BY
	ct.category_id,
    st.supplier_id
HAVING
	product_count > 40;
    

/*
	LIKE 연산자 ( 와일드카드 %, _)
    어떤 데이터를 포함한 것을 출력하는 검색
    % 예시 참고
    _ 글자수를 나타냄 ex) ___책상 -> 책상을 포함하고 앞의 글자가 3개 있는 데이터 출력
*/

SELECT
	*
FROM
	product_tb
WHERE
	product_name LIKE '%강%기%';
    
SELECT
	*
FROM
	product_tb
WHERE
	product_name LIKE '___책상';
    
SELECT
	*
FROM
	supplier_tb
WHERE
	supplier_name LIKE '%김'
    OR supplier_name LIKE '%이';
    
    
SELECT
	*
FROM
	supplier_tb
WHERE
	supplier_name IN ('양김', '유한회사 이');