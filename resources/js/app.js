/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './router/router'

import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '@mdi/font/css/materialdesignicons.css'



Vue.use(Vuetify)
 
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('login-register', require('./components/LoginRegisterComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('home', require('./components/HomeComponent.vue').default);
Vue.component('create_service', require('./components/CreateServiceComponent.vue').default);
Vue.component('service_detail', require('./components/ServiceDetailComponent.vue').default);
Vue.component('blog_home', require('./components/BlogHomeComponent.vue').default);
Vue.component('blog_create', require('./components/BlogCreateComponent.vue').default);
Vue.component('blog_detail', require('./components/BlogDetailComponent.vue').default);
Vue.component('order_create', require('./components/OrderCreateComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    }
})

