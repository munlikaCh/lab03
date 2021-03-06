import { createRouter, createWebHistory } from "vue-router";
import EventList from '../views/EventList.vue';
import About from '../views/About.vue';
import New from '../views/New.vue';
import StudentInfo from '../views/StudentInfo.vue';

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About
  },
  {
    path: "/ShowNewCompo",
    name: "New",
    component: New,
  },
  {
    path: "/students",
    name: "StudentInfo",
    component: StudentInfo,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
