import React, { ChangeEvent } from 'react';
import '../styles/todo-list.css';
import { TodoItem } from '../domain/Todo';

export type Props = {
  list: TodoItem[];
  actionDelete: (id: number) => void;
  actionToggle: (id: number, completed: boolean) => void;
};

const TodoList: React.FC<Props> = (props: Props) => {
  const toggleChecked = (item: TodoItem, e: any) => {
    props.actionToggle(item.id, e.target.checked);
  };

  const toggleDelete = (item: TodoItem) => {
    props.actionDelete(item.id);
  };

  return (
    <ul className="todo__list">
      {props.list.map((item, index) => {
        return (
          <li className="todo__list-item" key={index}>
            <p>{item.title}</p>
            <div className="todo__list-item-actions">
              <input
                onChange={(event) => toggleChecked(item, event)}
                type="checkbox"
                value={item.completed.toString() as any}
                id={item.completed.toString()}
                name={item.completed.toString() as any}
                checked={item.completed as any}
                className="todo__list-item-actions--toggle"
              />
              <button
                onClick={() => toggleDelete(item)}
                className="todo__list-item-actions--delete"
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
