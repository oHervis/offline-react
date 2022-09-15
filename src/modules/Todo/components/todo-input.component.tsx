import React from 'react';

export function TodoInput({
  todoItem,
  onInput,
}: {
  todoItem: string;
  onInput: any;
}) {
  return (
    <div>
      <input
        value={todoItem}
        onInput={(e: any) => onInput(e.target.value)}
        type="text"
      />
    </div>
  );
}
