import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2YgiOehWOft3xNapHvirHqf2cgmkOGQw",
  authDomain: "codingloop-21c8d.firebaseapp.com",
  databaseURL: "https://codingloop-21c8d-default-rtdb.firebaseio.com",
  projectId: "codingloop-21c8d",
  storageBucket: "codingloop-21c8d.appspot.com",
  messagingSenderId: "47361600162",
  appId: "1:47361600162:web:6dc18c9f7edb65d5e505fb",
  measurementId: "G-CZXBXN4C6P",
};

const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
