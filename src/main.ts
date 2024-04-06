import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from '@/views/App.vue';
import Home from '@/views/Home.vue';
import PostDetail from '@/views/PostDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/post/:id', name: 'post-detail', component: PostDetail}
    ]
});

createApp(App).use(router).mount('#app');
