import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(todo) {
      this.todoList.push({ todo, id: this.id++, completed: false });
    },
    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
