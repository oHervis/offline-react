export class Todo {
  public id: number;

  public todoItems: TodoItem[] = [];

  constructor(data: Todo = {} as Todo) {
    this.id = data.id ?? 0;
    this.todoItems = data.todoItems ?? [];
  }

  addTodoItem(title: string) {
    if (title) {
      this.todoItems.push({
        title,
        completed: false,
        id: this.todoItems.length + 1,
      });
    }
  }

  markAsCompleted(id: number) {
    const todoItem = this.todoItems.findIndex((item) => item.id === id);
    if (todoItem !== -1) {
      this.todoItems[todoItem].completed = true;
    }
  }

  markAsUncompleted(id: number) {
    const todoItem = this.todoItems.findIndex((item) => item.id === id);
    if (todoItem !== -1) {
      this.todoItems[todoItem].completed = false;
    }
  }

  deleteTodoItem(id: number) {
    const idToDelete = this.todoItems.findIndex((item) => item.id === id);
    this.todoItems.splice(idToDelete, 1);
  }
}

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
