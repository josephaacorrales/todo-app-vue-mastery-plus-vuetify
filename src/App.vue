<script setup>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <v-app id="todo-app">
    <v-main>
      <v-container class="d-flex justify-center align-center fill-height">
        <v-card width="500">
          <v-card-item>
            <v-card-title>To-Do List</v-card-title>
          </v-card-item>
          <v-card-text>
            <todo-list class="mb-4" />
            <todo-form id="todo-form" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#todo-app {
  background-color: #673ab7;
}
</style>
