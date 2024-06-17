<script setup>
const props = defineProps({
  mensaje: Object,
});
</script>
<template>
  <div
    class="border px-4 py-3 rounded w-full md:w-1/3 relative"
    role="alert"
    :class="
      mensaje.title == 'Exito!'
        ? 'bg-green-100 text-green-700 border-green-400'
        : 'bg-red-100 text-red-700 border-red-400'
    "
  >
    <strong class="font-bold text-3xl">{{ mensaje.title }}</strong
    ><br />
    <span class="block sm:inline text-xl">{{ mensaje.text }}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        class="fill-current h-6 w-6"
        :class="mensaje.title == 'Exito!' ? 'text-green-500' : 'text-red-500'"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Cerrar</title>
        <path
          d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.934 2.935a1 1 0 01-1.414-1.414l2.934-2.935-2.934-2.935a1 1 0 011.414-1.414L10 8.586l2.934-2.935a1 1 0 111.414 1.414l-2.934 2.935 2.934 2.935a1 1 0 010 1.414z"
        />
      </svg>
    </span>
  </div>
</template>
<style scope></style>
