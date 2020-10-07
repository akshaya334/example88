import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCKzJWAQozh8bpjnGILLrS0ABU5GO7m9lo",
  authDomain: "santa-book-5caf0.firebaseapp.com",
  databaseURL: "https://santa-book-5caf0.firebaseio.com",
  projectId: "santa-book-5caf0",
  storageBucket: "santa-book-5caf0.appspot.com",
  messagingSenderId: "165489344714",
  appId: "1:165489344714:web:3510c5722e49c2b1743433"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
