<template>
  <nav>
    <a @click="$router.push({ name: 'homePage' })">Главная</a> /
    {{ notesStore.notes[id].title }}
  </nav>
  <header>
    {{ notesStore.notes[id].title }}
  </header>
  <div>
    {{ notesStore.notes[id].description }}
  </div>
</template>

<script setup lang="ts">
import { useNotesStore } from "../stores/notes";
const notesStore = useNotesStore();
defineProps<{
  id: number;
}>();
</script>

<style lang="scss" scoped>
* {
  margin-left: 20px;
}
a {
  margin-left: 0px;
}
header {
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
}
div {
  white-space: pre-wrap;
}
</style>
