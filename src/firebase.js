import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCaoLyqRRC0Z-DH0I9de09c3ri2GsvfM4U",
    authDomain: "myinsta-46948.firebaseapp.com",
    projectId: "myinsta-46948",
    storageBucket: "myinsta-46948.appspot.com",
    messagingSenderId: "59955659138",
    appId: "1:59955659138:web:4c0003bab3cfb3e4418f9b"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();
 const provider = new firebase.auth.GoogleAuthProvider();


 export { db, auth, provider, storage};
