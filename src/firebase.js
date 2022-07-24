import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCwxO935-uMh8j7D5ym8V0nyYI7rjzLtzs",
    authDomain: "facebook-cloned-react.firebaseapp.com",
    projectId: "facebook-cloned-react",
    storageBucket: "facebook-cloned-react.appspot.com",
    messagingSenderId: "289404281782",
    appId: "1:289404281782:web:c7d3c227a5a9d0c4c11717",
    measurementId: "G-176EFKBETW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;