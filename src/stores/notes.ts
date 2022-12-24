import { ref, watch } from "vue";
import { defineStore } from "pinia";
import type { Note } from "../types/Note";

export const useNotesStore = defineStore("notesStore", () => {
  const notes = ref<Note[]>([]);
  const addNote = (title: string, description: string) => {
    const newItem = { title: title, description: description };
    notes.value.push(newItem);
  };
  const deleteNote = (key: number) => {
    notes.value.splice(key, 1);
  };

  if (localStorage.getItem("notes")) {
    notes.value = JSON.parse(localStorage.getItem("notes") || "{}");
  }

  watch(
    () => notes.value,
    (state) => {
      localStorage.setItem("notes", JSON.stringify(state));
    },
    { deep: true }
  );

  return { notes, addNote, deleteNote };
});


