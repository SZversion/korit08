/*
	정규화 ( 중복 제거 )
    1. DISTINCT ( 행의 조합 테이터가 동일한 행을 제거해줌 )
    2. GROUP BY ( SELECT절과 상관 없이 GROUP BY 절에서 Column을 선택하여 중복 제거 )
    
    SELECT 실행 순서
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
*/
SELECT
	DISTINCT -- 중복 제거
	category_name
FROM
	sample_products_tb
ORDER BY
	category_name ASC;
-- ASC -> 오름차순, DESC -> 내림차순

INSERT INTO category_tb(category_name)
SELECT
	category_name
FROM
	sample_products_tb
GROUP BY
	category_name
ORDER BY
	category_name;
    
INSERT INTO brand_tb(brand_name)
SELECT
	DISTINCT
	brand_name
FROM
	sample_products_tb
ORDER BY
	brand_name;
    
#INSERT INTO supplier_tb(supplier_name, supplier_phone)
SELECT
	supplier_name,
    supplier_phone
FROM
	sample_products_tb
GROUP BY
	supplier_name,
    supplier_phone
ORDER BY
	supplier_name,
	supplier_phone;
    

INSERT INTO product_tb
SELECT
	0,
	spt.product_name,
	ct.category_id,
	bt.brand_id,
	st.supplier_id,
	spt.price,
	spt.stock_quantity
FROM
	sample_products_tb spt
    INNER JOIN category_tb ct ON (ct.category_name = spt.category_name)
    INNER JOIN brand_tb bt ON (bt.brand_name = spt.brand_name)
    INNER JOIN supplier_tb st ON (st.supplier_name = spt.supplier_name AND st.supplier_phone = spt.supplier_phone)
ORDER BY
	spt.product_name,
    ct.category_id,
    bt.brand_id,
    st.supplier_id,
    spt.price,
    spt.stock_quantity;