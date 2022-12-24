<template>
  <div class="note-container">
    <header class="title">
      {{ title }}
    </header>
    <p class="description">
      {{ description }}
    </p>
    <footer class="button-container">
      <button
        class="open-button"
        @click="$router.push({ name: 'notePage', params: { id: id } })"
      >
        Открыть
      </button>
      <button class="delete-button" @click="notesStore.deleteNote(id)">
        Удалить
      </button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useNotesStore } from "../stores/notes";
const notesStore = useNotesStore();
defineProps<{
  id: number;
  title: string;
  description?: string;
}>();
</script>

<style lang="scss" scoped>
@use "../assets/styles.scss" as styles;
@use "../assets/variables.scss" as variables;
@mixin text($weight: normal) {
  font-weight: $weight;
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
        $border: solid variables.$open-button-color
      );
    }

    .delete-button {
      @include styles.defaultButton(
        $color: variables.$delete-button-color,
        $width: 35%,
        $border: solid variables.$delete-button-color
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
    width: 90%;
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
</style>
