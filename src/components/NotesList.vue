<template>
  <div class="notes-container">
    <NoteComponent
      v-for="(note, key) in notesStore.notes"
      :key="key"
      :id="key"
      :title="note.title"
      :description="note.description"
    />
  </div>
</template>

<script setup lang="ts">
import NoteComponent from "./NoteComponent.vue";
import { useNotesStore } from "../stores/notes";
const notesStore = useNotesStore();
</script>

<style lang="scss" scoped>
.notes-container {
  display: flex;
  flex-flow: row wrap;
}
</style>
