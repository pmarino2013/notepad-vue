<script setup>
import NavNote from "../components/NavNote.vue";
import { ref } from "vue";

const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

const note = ref({
  id: "",
  text: "",
  date: "",
});

const addNotes = (id, date) => {
  if (!id && !date) {
    id = new Date().getTime();
    date = new Date();
    let valores = { ...note.value, id, date };
    notes.value = [...notes.value, valores];
  } else {
    const index = notes.value.findIndex((item) => item.id === id);
    notes.value[index].text = note.value.text;
  }

  clearNote();
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

const readNote = (item) => {
  note.value = {
    id: item.id,
    text: item.text,
    date: item.date,
  };
};

const clearNote = () => {
  note.value = {
    id: "",
    text: "",
    date: "",
  };
  document.querySelector("#textNote").focus();
};

const deleteNote = (id) => {
  notes.value = notes.value.filter((item) => item.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes.value));
  clearNote();
};
</script>
<template>
  <nav class="bg-green-500 p-4 text-white">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Bloc de Notas</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-4 h-auto flex flex-col md:flex-row">
    <NavNote
      :notes="notes"
      :readNote="readNote"
      :clearNote="clearNote"
      :deleteNote="deleteNote"
    />

    <div class="md:w-3/4 bg-white shadow-lg rounded-lg p-4">
      <h2 class="text-xl font-semibold mb-4">Contenido de la Nota</h2>
      <textarea
        id="textNote"
        class="w-full h-96 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Escribe tu nota aquí..."
        v-model="note.text"
      ></textarea>
      <button
        class="w-full md:w-1/3 md:float-end bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        @click="addNotes(note.id, note.date)"
        :disabled="!note.text"
        :class="
          !note.text && 'disabled:bg-gray-400 disabled:cursor-not-allowed'
        "
      >
        Guardar
      </button>
    </div>
  </div>
</template>
<style scope></style>
