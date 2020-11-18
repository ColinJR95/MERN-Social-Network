import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyACkBMjIlM19hvRDgkLrXQ4SCSakshYLVI",
  authDomain: "grant-social-network.firebaseapp.com",
  databaseURL: "https://grant-social-network.firebaseio.com",
  projectId: "grant-social-network",
  storageBucket: "grant-social-network.appspot.com",
  messagingSenderId: "1026360169950",
  appId: "1:1026360169950:web:84005c4c04b49eb36f394f",
  measurementId: "G-NMFV7NKE8B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db