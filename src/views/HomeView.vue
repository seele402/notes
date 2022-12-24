<template>
  <header>Заметки</header>
  <div class="mainContainer">
    <div class="notes-creator-container"><NotesCreator /></div>
    <div class="notes-list-container"><NotesList /></div>
  </div>
</template>

<script setup lang="ts">
import NotesCreator from "../components/NotesCreator.vue";
import NotesList from "../components/NotesList.vue";
</script>

<style lang="scss" scoped>
header {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 15px;
}
.mainContainer {
  display: flex;
  .notes-creator-container {
    font-size: 30px;
    flex: 1.5;
  }
  .notes-list-container {
    font-size: 30px;
    flex: 3;
  }
}

@media screen and (max-width: 800px) {
  .mainContainer {
    flex-flow: column wrap;
  }
}
@media screen and (max-width: 1250px) {
  .mainContainer {
    .notes-creator-container {
      flex: 1;
    }
    .notes-list-container {
      flex: 1;
    }
  }
}
</style>
