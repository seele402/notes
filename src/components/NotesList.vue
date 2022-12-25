<template>
  <div class="notes-container">
    <NoteListItem
      v-for="(note, key) in notesStore.notes"
      :key="key"
      :note="note"
      @open="$router.push({ name: 'notePage', params: { id: key } })"
      @delete="notesStore.deleteNote(key)"
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
