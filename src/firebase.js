import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXo4GAsQR7OXTTUW57g__94qu8Hz2LTbo",
  authDomain: "discord-clone-a7b4f.firebaseapp.com",
  databaseURL: "https://discord-clone-a7b4f.firebaseio.com",
  projectId: "discord-clone-a7b4f",
  storageBucket: "discord-clone-a7b4f.appspot.com",
  messagingSenderId: "270120432900",
  appId: "1:270120432900:web:a14d8fb2fbfecc49d60c51",
  measurementId: "G-JDRM1KNYWK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db