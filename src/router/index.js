import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from "@/views/NotesView.vue";
import DossiersNotesView from "@/views/DossiersNotesView.vue";
import SupprimerNotesView from "@/views/SupprimerNotes.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/dossierNote',
      name: 'dossiers-notes',
      component: DossiersNotesView
    },
    {
      path: '/supprimerNote',
      name: 'supprimer-notes',
      component: SupprimerNotesView
    }

  ]
})

export default router
