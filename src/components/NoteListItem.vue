<template>
  <div class="note-container">
    <header class="title">
      {{ note.title }}
    </header>
    <p class="description">
      {{ note.description }}
    </p>
    <footer class="button-container">
      <button class="open-button" @click="$emit('open')">Открыть</button>
      <button class="delete-button" @click="$emit('delete')">Удалить</button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { Note } from "@/types/Note";
defineProps<{
  note: Note;
}>();
</script>

<style lang="scss" scoped>
@use "../assets/styles.scss" as styles;
@use "../assets/variables.scss" as variables;
@mixin text($weight: normal) {
  font-weight: $weight;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.note-container {
  @extend %box-border;
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  height: 285px;
  padding: 30px;
  margin: 20px;
  .title {
    @include text($weight: bold);
  }
  .description {
    @include text;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    .open-button {
      @include styles.defaultButton(
        $color: variables.$open-button-color,
        $width: 35%,
        $border: 1px solid variables.$open-button-color
      );
    }

    .delete-button {
      @include styles.defaultButton(
        $color: variables.$delete-button-color,
        $width: 35%,
        $border: 1px solid variables.$delete-button-color
      );
    }
  }
}

@media screen and (max-width: 800px) {
  .note-container {
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 400px) {
  .note-container {
    margin-left: 10px;
    margin-right: 20px;
    width: 80vw;
    .button-container {
      .open-button {
        min-width: fit-content;
      }
      .delete-button {
        min-width: fit-content;
      }
    }
  }
}
@media screen and (max-width: 240px) {
  .note-container {
    .button-container {
      flex-flow: column wrap;
    }
  }
}
</style>
