import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC-_caaYWwmoRYZ0fZ9Or4Mg2D3O2uRcIo",
  authDomain: "todoreactredux-12.firebaseapp.com",
  databaseURL: "https://todoreactredux-12.firebaseio.com",
  projectId: "todoreactredux-12",
  storageBucket: "todoreactredux-12.appspot.com",
  messagingSenderId: "63228144687"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
