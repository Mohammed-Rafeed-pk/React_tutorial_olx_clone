import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA-gpBYFmusbx30zYbATSm8yYXcgoyYxVE",
    authDomain: "olxproject-bfce8.firebaseapp.com",
    projectId: "olxproject-bfce8",
    storageBucket: "olxproject-bfce8.appspot.com",
    messagingSenderId: "330165100468",
    appId: "1:330165100468:web:55c59f6dde981014979ce1",
    measurementId: "G-9K15CHGRMC"
  };
export default firebase.initializeApp(firebaseConfig)