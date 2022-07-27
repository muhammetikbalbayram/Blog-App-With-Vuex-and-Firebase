import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2FRUNL-68ohZLFKeEvafJnDJGg1XUVLI",
    authDomain: "blog-app-with-vuex.firebaseapp.com",
    projectId: "blog-app-with-vuex",
    storageBucket: "blog-app-with-vuex.appspot.com",
    messagingSenderId: "741257437398",
    appId: "1:741257437398:web:ef0fbdd594887f21a4a977"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {timestamp};
export default firebaseApp.firestore();