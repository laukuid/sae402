import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessagesView from "@/views/MessagesView.vue";
import Message1View from "@/views/Message1View.vue";
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
import Mail1View from "@/views/Mail1View.vue";
import Indesirable from "@/views/IndesirableView.vue";
import CorbeilView from "@/views/CorbeilView.vue";
import Mail2View from "@/views/Mail2View.vue";
import Mail3View from "@/views/Mail3View.vue";
import Mail4View from "@/views/Mail4View.vue";
import Mail5View from "@/views/Mail5View.vue";
import Mail6View from "@/views/Mail6View.vue";
import Mail7View from "@/views/Mail7View.vue";
import Mail8View from "@/views/Mail8View.vue";
import Mail9View from "@/views/Mail9View.vue";
import Mail10View from "@/views/Mail10View.vue";
import CameraView from "@/views/CamreraView.vue";
import ErreurReseauView from "@/views/ErreurReseauView.vue";
import ErreurCrashView from "@/views/ErreurCrashView.vue";
import ErreurGPSView from "@/views/ErreurGPSView.vue";
import SecuriteDossierView from "@/views/SecuriteDossierView.vue";
import SousPage from "@/components/SousPage.vue";
import CodeView from "@/components/CodeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView
    },
    {
      path: '/message1',
      name: 'message1',
      component: Message1View
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
    },
    {
      path: '/mail1',
      name: 'mail1',
      component: Mail1View
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    },
    {
      path: '/indesirable',
      name: 'indesirable',
      component: Indesirable
    },
    {
      path: '/corbeil',
      name: 'corbeil',
      component: CorbeilView
    },
    {
      path: '/mail2',
      name: 'mail2',
      component: Mail2View
    },
    {
      path: '/mail3',
      name: 'mail3',
      component: Mail3View
    },
    {
      path: '/mail4',
      name: 'mail4',
      component: Mail4View
    },
    {
      path: '/mail5',
      name: 'mail5',
      component: Mail5View
    },
    {
      path: '/mail6',
      name: 'mail6',
      component: Mail6View
    },
    {
      path: '/mail7',
      name: 'mail7',
      component: Mail7View
    },
    {
      path: '/mail8',
      name: 'mail8',
      component: Mail8View
    },
    {
      path: '/mail9',
      name: 'mail9',
      component: Mail9View
    },
    {
      path: '/mail10',
      name: 'mail10',
      component: Mail10View
    },
    {
      path: '/securiteDossier',
      name: 'securite-dossier',
      component: SecuriteDossierView
    },
    {
      path: '/erreurReseau',
      name: 'erreurReseau',
      component: ErreurReseauView
    },
    {
      path: '/erreurCrash',
      name: 'erreurCrash',
      component: ErreurCrashView
    },
    {
      path: '/erreurGPS',
      name: 'erreurGPS',
      component: ErreurGPSView
    },
    {
      path: '/sousPage',
      name: 'sous-page',
      component: SousPage
    },
    {
      path: '/code',
      name: 'code',
      component: CodeView
    }
  ]
})

export default router
