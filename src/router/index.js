import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeScreen.vue";
import About from "../views/AboutScreen.vue";
import Note from "../views/NoteScreen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/note",
    name: "Note",
    component: Note,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
