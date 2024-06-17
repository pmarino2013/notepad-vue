<script setup>
import NavNote from "../components/NavNote.vue";
import MessageApp from "../components/MessageApp.vue";
import { ref } from "vue";

const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

const note = ref({
  id: "",
  text: "",
  date: "",
});

const show = ref(false);
const mensaje = ref({
  title: "",
  text: "",
});

const addNotes = (id, date) => {
  show.value = true;
  mensaje.value = {
    title: "Exito!",
    text: "Nota guardada",
  };
  if (!id && !date) {
    id = new Date().getTime();
    date = new Date();
    let valores = { ...note.value, id, date };
    notes.value = [...notes.value, valores];
  } else {
    const index = notes.value.findIndex((item) => item.id === id);
    notes.value[index].text = note.value.text;
  }

  setTimeout(() => {
    show.value = false;
    clearNote();
    localStorage.setItem("notes", JSON.stringify(notes.value));
  }, 2000);
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
  mensaje.value = {
    title: "Listo!",
    text: "Nota Eliminada",
  };

  show.value = true;

  notes.value = notes.value.filter((item) => item.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes.value));

  setTimeout(() => {
    show.value = false;
    clearNote();
  }, 2000);
};
</script>
<template>
  <nav class="bg-green-500 p-4 text-white">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Bloc de Notas</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-4 h-auto flex flex-col lg:flex-row gap-3">
    <NavNote
      :notes="notes"
      :readNote="readNote"
      :clearNote="clearNote"
      :deleteNote="deleteNote"
    />

    <div class="lg:w-3/4 bg-white shadow-lg rounded-lg p-4">
      <h2 class="text-3xl font-semibold mb-4">
        <i class="fa fa-pencil" aria-hidden="true"></i>Nota
      </h2>
      <textarea
        id="textNote"
        class="w-full h-96 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-xl"
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
        <div class="flex justify-center items-center gap-2">
          <i class="fa fa-floppy-o fa-2x" aria-hidden="true"></i>
          <span class="text-xl">Guardar</span>
        </div>
      </button>
    </div>
    <Transition>
      <div v-if="show" class="fixed w-full px-3 overlay">
        <MessageApp :mensaje="mensaje" />
      </div>
    </Transition>
  </div>
</template>
<style scope>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
