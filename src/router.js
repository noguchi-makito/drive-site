import Vue from "vue";
import Router from "vue-router";

// page
import LoginPage from "@/components/LoginPage";
import DatePage from "@/components/DatePage";
import HelloWorld from "@/components/HelloWorld";
import FormPage from "@/components/FormPage";
import NotFound from "@/components/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LoginPage
    },
    {
      path: "/login",
      name: "Login",
      query: { next: "" },
      component: LoginPage
    },
    {
      path: "/date",
      name: "DatePage",
      query: { auth: "" },
      component: DatePage
    },
    {
      path: "/hellow",
      component: HelloWorld
    },
    {
      path: "/form",
      component: FormPage
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
