<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  notes: Array,
  readNote: Function,
  clearNote: Function,
  deleteNote: Function,
});

const showDetails = ref(false);

const handleDetails = (item) => {
  props.readNote(item);
  document.querySelector("details").open = false;
  showDetails.value = false;
};
</script>
<template>
  <div class="lg:w-1/4 bg-white shadow-lg rounded-lg p-4 mb-4 lg:mb-0">
    <button
      class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-3"
      @click="clearNote"
    >
      <div class="flex items-center justify-center gap-2">
        <i class="fa fa-plus-square-o fa-2x" aria-hidden="true"></i
        ><span class="text-xl">Nota nueva</span>
      </div>
    </button>
    <details class="border rounded-md shadow-sm bg-white p-4 mb-4">
      <summary
        @click="showDetails = !showDetails"
        class="cursor-pointer font-semibold text-lg text-green-600 hover:text-green-600"
      >
        <span v-if="notes.length > 0">{{ notes.length + " " }} </span>

        <i
          v-if="notes.length > 0"
          class="fa fa-file-text-o"
          aria-hidden="true"
        ></i>
        <i v-else class="fa fa-file-o" aria-hidden="true"></i>
        Notas
      </summary>

      <ul v-if="showDetails">
        <li
          v-for="(item, index) in notes"
          class="flex justify-between items-center"
        >
          <div
            @click="handleDetails(item)"
            class="flex-auto mb-2 px-2 py-4 bg-gray-200 rounded-l-lg cursor-pointer hover:bg-gray-300"
          >
            <!-- <span>Nota {{ index + 1 }}</span> -->
            <span v-if="item.text.length > 20" class="text-xl"
              >{{ item.text.substring(0, 20) }}...</span
            ><span v-else class="text-xl">{{ item.text }}</span>
          </div>
          <div
            class="mb-2 px-2 py-3 rounded-r-lg cursor-pointer hover:bg-red-700 bg-red-500 text-white font-bold"
            @click="deleteNote(item.id)"
          >
            <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
          </div>
        </li>
      </ul>
    </details>
  </div>
</template>
<style scope>
details {
  position: relative;
}
details[open] summary ~ * {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
