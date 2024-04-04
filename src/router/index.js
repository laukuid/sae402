import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from "@/views/NotesView.vue";
import DossiersNotesView from "@/views/DossiersNotesView.vue";
import SupprimerNotesView from "@/views/SupprimerNotes.vue";
import NotesIndiceView from "@/views/NotesIndiceView.vue";
import Note1View from "@/views/Note1View.vue";
import Note2View from "@/views/Note2View.vue";
import Note3View from "@/views/Note3View.vue";
import Note4View from "@/views/Note4View.vue";
import Note5View from "@/views/Note5View.vue";
import Note6View from "@/views/Note6View.vue";
import Note7View from "@/views/Note7View.vue";
import Note8View from "@/views/Note8View.vue";
import MailView from "@/views/MailView.vue";
import ReceptionView from "@/views/ReceptionView.vue";

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
    },
    {
      path: '/notesIndice',
      name: 'notes-indice',
      component: NotesIndiceView
    },
    {
      path: '/note1',
      name: 'note1',
      component: Note1View
    },
    {
      path: '/note2',
      name: 'note2',
      component: Note2View
    },
    {
      path: '/note3',
      name: 'note3',
      component: Note3View
    },
    {
      path: '/note4',
      name: 'note4',
      component: Note4View
    },
    {
      path: '/note5',
      name: 'note5',
      component: Note5View
    },
    {
      path: '/note6',
      name: 'note6',
      component: Note6View
    },
    {
      path: '/note7',
      name: 'note7',
      component: Note7View
    },
    {
      path: '/note8',
      name: 'note8',
      component: Note8View
    },
    {
      path: '/mail',
      name: 'mail',
      component: MailView
    },
    {
      path: '/reception',
      name: 'reception',
      component: ReceptionView
    }

  ]
})

export default router
