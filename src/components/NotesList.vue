<template>
  <div class="notes-container">
    <NoteListItem
      v-for="(note, key) in notesStore.notes"
      :key="key"
      :id="key"
      :note="note"
    />
  </div>
</template>

<script setup lang="ts">
import NoteListItem from "./NoteListItem.vue";
import { useNotesStore } from "../stores/notes";
const notesStore = useNotesStore();
</script>

<style lang="scss" scoped>
.notes-container {
  display: flex;
  flex-flow: row wrap;
}
</style>
