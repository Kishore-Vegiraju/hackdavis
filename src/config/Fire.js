import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC1gHCJNW8kWhKRN_J8Npzz8sItEtmCcWQ",
    authDomain: "hackda-890c0.firebaseapp.com",
    databaseURL: "https://hackda-890c0.firebaseio.com",
    projectId: "hackda-890c0",
    storageBucket: "hackda-890c0.appspot.com",
    messagingSenderId: "377862863014",
    appId: "1:377862863014:web:837a6aedf8316bab0e1c67"
  };
  
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;