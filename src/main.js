import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyC2zNa1kHGWAmSVF1-Sjoa7LyOZUjHInak',
  authDomain: 'vue-firebase-auth-18cac.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-18cac.firebaseio.com',
  projectId: 'vue-firebase-auth-18cac',
  storageBucket: 'vue-firebase-auth-18cac.appspot.com',
  messagingSenderId: '228604255829',
  appId: '1:228604255829:web:879647fdd5ceea381bfedc'
}
// Initialize Firebase
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
