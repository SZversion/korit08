import React, { useEffect, useRef, useState } from "react";

function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);
  const [selectedModifyId, setSelectedModifyId] = useState(0);
  const [modifyInputValue, setModifyInputValue] = useState(0);

  //   useState로 ID값 증가
  //   const [ids, setIds] = useState(1)
  //   const saveTodo = () => {
  //     const todo = {
  //       id: ids,
  //       content: value,
  //     };
  //     setTodos((prev) => [...prev, todo]);
  //     setIds(prev => prev + 1);
  //   };

  //   useRef로 ID값 증가
  const id2 = useRef(0);
  const saveTodo = () => {
    const todo = {
      id: id2.current + 1,
      content: value,
      date: new Date().toLocaleDateString(),
      checked: false,
    };
    setTodos((prev) => [...prev, todo]);
    id2.current += 1;
  };

  const handleCheckOnChange = (e, todoId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    if (todos.length > 0) {
      if (todos.reduce((prev, current) => prev && current.checked, true)) {
        setCheckedAll(true);
      } else {
        setCheckedAll(false);
      }
    }
  }, [todos]);

  const handleCheckAllOnChange = (e) => {
    setCheckedAll(e.target.checked);
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        checked: e.target.checked,
      }))
    );
  };

  const handleSelectedRowDeleteOnClick = (e) => {
    setTodos((prev) => prev.filter((todo) => !todo.checked));
  };

  const handleModifyOnClick = (e, todoId) => {
    setSelectedModifyId(todoId);
    setModifyInputValue(todos.find((todo) => todo.id === todoId).content);
  };

  const modifyTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === selectedModifyId) {
          return {
            ...todo,
            content: modifyInputValue,
          };
        }
        return todo;
      })
    );
  };

  const handleModifyInputOnChange = (e) => {
    modifyTodo;
    setModifyInputValue(e.target.value);
  };

  const resetSelectedModifyId = () => {
    setSelectedModifyId(0);
  };

  const handleModifyOkOnClick = (e) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === selectedModifyId) {
          return {
            ...todo,
            content: modifyInputValue,
          };
        }
        return todo;
      })
    );
    resetSelectedModifyId();
  };

  const handleModifyCancelOnClick = (e) => {
    resetSelectedModifyId();
  };

  return (
    <div>
      <header>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              saveTodo();
            }
          }}
        />
        <button onClick={() => saveTodo()}>확인</button>
        <button onClick={handleSelectedRowDeleteOnClick}>선택 삭제</button>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={checkedAll}
                  onChange={handleCheckAllOnChange}
                />
              </th>
              <th>번호</th>
              <th>내용</th>
              <th>날짜</th>
              <th>수정</th>
              {selectedModifyId !== 0 ? <></> : <th>삭제</th>}
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckOnChange(e, todo.id)}
                      checked={todo.checked}
                    />
                  </td>
                  <td>{todo.id}</td>
                  <td>
                    {selectedModifyId !== todo.id ? (
                      todo.content
                    ) : (
                      <input
                        value={modifyInputValue}
                        onChange={handleModifyInputOnChange}
                        onKeyDown={(e) => {
                          if (e.keyCode === 13) {
                            modifyTodo();
                          }
                        }}
                      />
                    )}
                  </td>
                  <td>{todo.date}</td>
                  <td>
                    {selectedModifyId !== todo.id ? (
                      <button onClick={(e) => handleModifyOnClick(e, todo.id)}>
                        수정
                      </button>
                    ) : (
                      <>
                        <button onClick={handleModifyOkOnClick}>확인</button>
                        <button onClick={handleModifyCancelOnClick}>
                          취소
                        </button>
                      </>
                    )}
                  </td>
                  {selectedModifyId !== 0 ? (
                    <></>
                  ) : (
                    <td>
                      <button
                        onClick={() => {
                          setTodos((prev) =>
                            prev.filter((t) => t.id !== todo.id)
                          );
                        }}
                      >
                        삭제
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Todo;
