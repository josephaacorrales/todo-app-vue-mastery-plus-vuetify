<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList";

const store = useTodoListStore();

const todo = ref("");

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)" class="d-flex">
      <v-text-field
        v-model="todo"
        type="text"
        density="compact"
        style="max-width: 360px"
        label="New To-Do"
      />
      <v-btn class="ml-6" variant="tonal" @click="addItemAndClear(todo)">
        Add
      </v-btn>
    </form>
  </div>
</template>
