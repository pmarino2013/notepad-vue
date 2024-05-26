<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  notes: Array,
  readNote: Function,
  clearNote: Function,
  deleteNote: Function,
});
// const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);
</script>
<template>
  <div class="md:w-1/4 bg-white shadow-lg rounded-lg p-4 mb-4 md:mb-0">
    <h2 class="text-xl font-semibold mb-4">Notas</h2>
    <button
      class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-3"
      @click="clearNote"
    >
      Nueva Nota
    </button>
    <ul>
      <li
        v-for="(item, index) in notes"
        class="flex justify-between items-center"
      >
        <div
          @click="readNote(item)"
          class="flex-auto mb-2 p-2 bg-gray-200 rounded-l-lg cursor-pointer hover:bg-gray-300"
        >
          <!-- <span>Nota {{ index + 1 }}</span> -->
          <span>{{ item.text.substring(0, 10) }}...</span>
        </div>
        <div
          class="mb-2 p-2 rounded-r-lg cursor-pointer hover:bg-gray-300 bg-red-500 text-white font-bold"
          @click="deleteNote(item.id)"
        >
          X
        </div>
      </li>
    </ul>
  </div>
</template>
<style scope></style>
