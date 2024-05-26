<script setup>
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("# Hello Editor");
</script>
<template>
  <div class="h-screen max-w-full box-border">
    <MdEditor v-model="text" class="h-100 max-w-full box-border" />
    <button
      class="w-full md:w-1/3 md:float-end mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4"
    >
      Guardar
    </button>
  </div>
</template>
<style scope></style>
