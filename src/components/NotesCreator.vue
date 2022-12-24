<template>
  <p class="title">Заголовок</p>
  <input class="title-input" v-model="title" />
  <p class="description">Описание</p>
  <textarea class="description-input" v-model="description"></textarea>
  <button class="add-button" @click="notesStore.addNote(title, description)">
    Добавить
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNotesStore } from "../stores/notes";
const notesStore = useNotesStore();
const title = ref("");
const description = ref("");
</script>

<style lang="scss" scoped>
@use "../assets/styles.scss" as styles;
.title {
  margin-top: 15px;
  margin-bottom: 15px;
}
.title-input {
  @extend %box-border;
  width: 90%;
  height: 45px;
  overflow: auto;
}
.description {
  margin-bottom: 15px;
}
.description-input {
  @extend %box-border;
  width: 90%;
  height: 80px;
  resize: none;
  overflow-y: auto;
}
.add-button {
  @include styles.defaultButton(
    $background-color: #2c6bfc,
    $color: white,
    $width: 20%
  );
}
</style>
