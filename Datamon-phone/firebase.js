import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCCaK42y5SGoDpoo39MwWuI74Z6sBCzxyA",
  authDomain: "datamon-4375b.firebaseapp.com",
  databaseURL: "https://datamon-4375b.firebaseio.com",
  projectId: "datamon-4375b",
  storageBucket: "datamon-4375b.appspot.com",
  messagingSenderId: "264971041150",
  appId: "1:264971041150:web:8322f778b1f0890e8d9b2f",
  measurementId: "G-JKZ3S4TCN3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db