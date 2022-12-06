<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();

const { todoList } = storeToRefs(store);

const { toggleCompleted } = store;
</script>

<template>
  <div>
    <v-table v-show="todoList.length">
      <thead>
        <tr>
          <th class="text-left">To-Do</th>
          <th class="text-left" style="width: 60px">Completed</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todoList" :key="todo.id">
          <td style="max-width: 291px; min-width: 291px">
            <p :class="{ 'text-decoration-line-through': todo.completed }">
              {{ todo.todo }}
            </p>
          </td>
          <td class="text-center" style="width: 60px">
            <v-checkbox-btn
              :value="!todo.completed"
              @click="toggleCompleted(todo.id)"
            />
          </td>
          <td>
            <v-btn
              variant="text"
              icon="mdi-delete"
              @click="store.deleteTodo(todo.id)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
