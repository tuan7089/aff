<template>
  <div id="app">
    <nav-header />
    <div class="body">
      <router-view/>
    </div>

    <nav-footer />
  </div>
</template>

<script>
// Import CSS
import "element-ui/lib/theme-chalk/index.css"
import '@/assets/css/app-style.scss'
// Import Library
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

// Firebase
import * as firebase from 'firebase';

var app = firebase.initializeApp({ 
  apiKey: "AIzaSyCKlrlG3RUmOFTgur5BdUSspdpcAv1Zvo4",
  authDomain: "affiliate-marketing-01.firebaseapp.com",
  databaseURL: "https://affiliate-marketing-01.firebaseio.com",
  projectId: "affiliate-marketing-01",
  storageBucket: "affiliate-marketing-01.appspot.com",
  messagingSenderId: "488368337878"
})

import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import { log } from 'util';
import store from '@/store/store'

export default {
  name: 'App',
  components: {
    'nav-header': NavHeader,
    'nav-footer': NavFooter
  },

  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.commit('setSignIn', true)
        }
    });
  }
}
</script>
