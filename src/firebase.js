import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0a6f9I9pTE1As_ZFmA-5IaPnUPdlz9cM",
    authDomain: "tinder-clone-3f68f.firebaseapp.com",
    databaseURL: "https://tinder-clone-3f68f.firebaseio.com",
    projectId: "tinder-clone-3f68f",
    storageBucket: "tinder-clone-3f68f.appspot.com",
    messagingSenderId: "308311887022",
    appId: "1:308311887022:web:8b15f9cd6c6dd85018313f",
    measurementId: "G-K14J7PRE2P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;