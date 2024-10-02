import { createRouter, createWebHistory } from 'vue-router';
import Quiz from '../components/soal/formsoal.vue';
import Home from "../components/views/Home.vue";
import About from "../components/views/About.vue";
import Services from "../components/views/Services.vue";
import Contact from "../components/views/Contact.vue";
import QuizForm from "../components/soal/Quiz.vue";

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
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/quizf',
    name: 'QuizF',
    component: QuizForm
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
