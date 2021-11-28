import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD5YjkSTuw9IWlh3-xriWozVTAmECF1SKk",
    authDomain: "fireblogsyt-a80b4.firebaseapp.com",
    projectId: "fireblogsyt-a80b4",
    storageBucket: "fireblogsyt-a80b4.appspot.com",
    messagingSenderId: "498815773564",
    appId: "1:498815773564:web:3ccdc405df4b69cf7752f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {timestamp};
export default firebaseApp.firestore();