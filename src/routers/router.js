import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue"
import ViewSnippet from "../components/ViewSnippet.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/snippet",
        name: "Snippet",
        component: ViewSnippet,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;