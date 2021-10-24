// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

(function (window) {
    'use strict';
    var App = window.App || {};
    
    var FirebaseConfig = {
      apiKey: "AIzaSyDJ1hU3HTutS_s_Mvs5ReBj2oKHny6x2Dc",
      authDomain: "coffeerun-44efb.firebaseapp.com",
      projectId: "coffeerun-44efb",
      storageBucket: "coffeerun-44efb.appspot.com",
      messagingSenderId: "169880632276",
      appId: "1:169880632276:web:8dec08f5b0bcfc0a127441",
      measurementId: "G-945826P3FB"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);