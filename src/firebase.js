import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDCxRkf6z99H-sYS13bJbdUPE-QPOZuIBA",
    authDomain: "fb-react-d5f3e.firebaseapp.com",
    projectId: "fb-react-d5f3e",
    storageBucket: "fb-react-d5f3e.appspot.com",
    messagingSenderId: "793613223440",
    appId: "1:793613223440:web:ae67de26dd56f73984ac95",
    measurementId: "G-QGCMVL2C3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;