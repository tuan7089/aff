// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase';

var app = firebase.initializeApp({ 
  apiKey: "AIzaSyCKlrlG3RUmOFTgur5BdUSspdpcAv1Zvo4",
  authDomain: "affiliate-marketing-01.firebaseapp.com",
  databaseURL: "https://affiliate-marketing-01.firebaseio.com",
  projectId: "affiliate-marketing-01",
  storageBucket: "affiliate-marketing-01.appspot.com",
  messagingSenderId: "488368337878"
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
