import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD8tdRTyo3F79I--OtZHp0_hlLx4vwb2gM",
    authDomain: "crud-expo-2d3d7.firebaseapp.com",
    projectId: "crud-expo-2d3d7",
    storageBucket: "crud-expo-2d3d7.appspot.com",
    messagingSenderId: "129818752570",
    appId: "1:129818752570:web:98dda5148af74c04392703"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db
  }