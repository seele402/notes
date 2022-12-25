<template>
  <nav>
    <router-link :to="{ name: 'homePage' }">Главная</router-link> /
    {{ notes.title }}
  </nav>
  <header>
    {{ notes.title }}
  </header>
  <div>
    {{ notes.description }}
  </div>
</template>

<script setup lang="ts">
import { useNotesStore } from "../stores/notes";
import { computed } from "vue";
const props = defineProps<{
  id: number;
}>();
const notesStore = useNotesStore();
const notes = computed(() => notesStore.notes[props.id]);
</script>

<style lang="scss" scoped>
* {
  margin-left: 20px;
}
nav {
  margin-top: 40px;
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
