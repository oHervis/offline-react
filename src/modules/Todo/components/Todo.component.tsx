import React, { ChangeEvent, useEffect, useState } from 'react';
import { TodoInput } from './todo-input.component';
import TodoList from './todo-list.component';
import '../styles/todo-input-button.css';
import { Todo, TodoItem } from '../domain/Todo';

export function TodoComponent() {
  const todoApp = new Todo();

  const [todoAppState, setTodoAppState] = useState(todoApp);

  const [todoItem, setTodoItem] = useState('');

  const addItem = () => {
    todoAppState.addTodoItem(todoItem);
    setTodoAppState(new Todo(todoAppState));
    setTodoItem('');
  };

  const toggleChecked = (id: number, completed: boolean) => {
    if (completed) {
      todoAppState.markAsCompleted(id);
      setTodoAppState(new Todo(todoAppState));
      return;
    }
    todoAppState.markAsUncompleted(id);

    setTodoAppState(new Todo(todoAppState));
  };

  const actionDelete = (id: number) => {
    todoAppState.deleteTodoItem(id);
    setTodoAppState(new Todo(todoAppState));
  };

  return (
    <>
      <TodoInput todoItem={todoItem} onInput={setTodoItem} />
      <button onClick={addItem}>Add</button>
      <div className="todo__input-button">
        <TodoList
          list={todoAppState.todoItems}
          actionDelete={actionDelete}
          actionToggle={toggleChecked}
        />
      </div>
    </>
  );
}
