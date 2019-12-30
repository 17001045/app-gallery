import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/photo-upload",
    name: "photo-upload",
    component: () => import("./components/photoUpload/index.vue")
  },
  {
    path: "/photos",
    name: "photos",
    component: () => import("./components/photoList/index.vue")
  },
  {
    path: "/**",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;

/*
  {
    path: "/crud-vuex",
    name: "crud-vuex",
    component: () => import("../views/Crud-vuex.vue")
  }
*/
