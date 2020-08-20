import { firebase } from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCaK42y5SGoDpoo39MwWuI74Z6sBCzxyA",
  authDomain: "datamon-4375b.firebaseapp.com",
  databaseURL: "https://datamon-4375b.firebaseio.com",
  projectId: "datamon-4375b",
  storageBucket: "datamon-4375b.appspot.com",
  messagingSenderId: "264971041150",
  appId: "1:264971041150:web:8322f778b1f0890e8d9b2f",
  measurementId: "G-JKZ3S4TCN3"
})

const db = firebaseApp.database()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()


export default { db, auth, storage }