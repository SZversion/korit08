function HelloReact() {
  // JSX 의 특징
  // 1. 태그가 열리면 꼭 닫혀야한다
  <input type="text" />;
  // 2. 2개 이상의 jsx는 하나의 JSX로 감싸야한다
  //const jsx2 = <div></div><div></div> => ❌
  const jsx1 = (
    <div>
      <div></div>
      <div></div>
    </div>
  ); //=> ⭕
  // 3. 변수, 상수, 리스트, 값 등을 표현하려면 {중괄호}로 감싸서 표현한다
  const name = "name1";
  const age = 23;
  const jsx2 = (
    <div>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age + 1}</h3>
    </div>
  );
  // 4. 2번에서 2개 이상의 jsx는 하나로 감싸야한다고 배움.
  // 이때, 그룹을 위ㅐ 만들어진 태그가 있다 =>  <></>
  const jsx3 = (
    <>
      <div></div>
      <div></div>
    </>
  );
  return <div>{jsx2}</div>;
}

export default HelloReact;
