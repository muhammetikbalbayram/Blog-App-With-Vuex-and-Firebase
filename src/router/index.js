import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "@/views/Blogs";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ForgotPassword from "@/views/ForgotPassword";
import Admin from "@/views/Admin";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:"Home",
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta:{
      title:"Blogs",
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      title:"Login",
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      title:"Register",
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta:{
      title:"Forgot Password",
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta:{
      title:"Admin",
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      title:"Profile",
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=> {
  document.title = `${to.meta.title} | AşilBlog`
  next()
})

export default router;
