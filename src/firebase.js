import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBu_-xrJVauNg0gFNSB4ky4aUivtuDvLwA",
    authDomain: "netflix-clone-efcd3.firebaseapp.com",
    projectId: "netflix-clone-efcd3",
    storageBucket: "netflix-clone-efcd3.appspot.com",
    messagingSenderId: "99107609129",
    appId: "1:99107609129:web:58735e81296bee5cd4da38"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const ref = collection(db, 'posts')

export {auth}
export default db;



