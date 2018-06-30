  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC7TBAcIVJkWWTtcgyI4py2jZyoDCJp5E0",
    authDomain: "exercises-app.firebaseapp.com",
    databaseURL: "https://exercises-app.firebaseio.com",
    projectId: "exercises-app",
    storageBucket: "exercises-app.appspot.com",
    messagingSenderId: "884386564008"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true});

  export default db