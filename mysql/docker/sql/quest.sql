SELECT * FROM clinic_tb;

INSERT INTO clinic_tb
SELECT
	0,
	pt.patient_id,
    dt.department_id,
    doct.doctor_id,
    cvt.treatment,
    cvt.visit_date,
    cvt.fee
FROM
	clinic_visit_tb cvt
    INNER JOIN patient_tb pt ON ( pt.patient_name = cvt.patient_name AND pt.patient_gender = cvt.gender AND pt.patient_birth = cvt.birth_date )
	INNER JOIN department_tb dt ON ( dt.department_name = cvt.department )
	INNER JOIN doctor_tb doct ON ( doct.doctor_name = cvt.doctor_name AND doct.doctor_department = dt.department_id )
GROUP BY
	pt.patient_id,
    dt.department_id,
    doct.doctor_id,
    cvt.treatment,
    cvt.visit_date,
    cvt.fee
ORDER BY
	pt.patient_id,
    dt.department_id,
    doct.doctor_id,
    cvt.treatment,
    cvt.visit_date,
    cvt.fee