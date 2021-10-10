import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyD4gIxE1hKydQLyqEuYpkUTzzulPF7qjRo",
  authDomain: "complaint-forum-1c866.firebaseapp.com",
  projectId: "complaint-forum-1c866",
  storageBucket: "complaint-forum-1c866.appspot.com",
  messagingSenderId: "926875440800",
  appId: "1:926875440800:web:bb2bee883edc5377585bc5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

