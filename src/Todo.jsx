import { useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import IncompleteTodos from '../../practice-react/src/components/IncompleteTodos';
import CompleteTodos from '../../practice-react/src/components/CompleteTodos';
const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([
    'TODOです1',
    'TODOです2',
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    'TODOでした1',
    'TODOでした2',
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText == '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // incompleteTodosから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // completeTodosに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    // 完了todoから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 未完了todoに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
};

export default Todo;
