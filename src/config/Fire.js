import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC_ie06l-9vzdBzQIazJppcw4NHMTUB4N4",
  authDomain: "project-5138603647897783820.firebaseapp.com",
  databaseURL: "https://project-5138603647897783820.firebaseio.com",
  projectId: "project-5138603647897783820",
  storageBucket: "project-5138603647897783820.appspot.com",
  messagingSenderId: "692133130593",
  appId: "1:692133130593:web:bb584592b0cd6f5be49520",
  measurementId: "G-NQ661KG747"
};
  
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;