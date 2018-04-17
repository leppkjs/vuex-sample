import Vue from 'vue';
import Router from 'vue-router';
import App from '@/components/App';
import Main from '@/components/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
});
