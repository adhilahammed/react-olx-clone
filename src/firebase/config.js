import firebase from 'firebase'   
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDpxN3JZqumr3cA_TFDxCdJePkS-lT__zE",
    authDomain: "fir-23d47.firebaseapp.com",
    projectId: "fir-23d47",
    storageBucket: "fir-23d47.appspot.com",
    messagingSenderId: "326686208064",
    appId: "1:326686208064:web:7589ab7ddb49da10c76fa5",
    measurementId: "G-2VRDW5MGCL"
  };

 export default  firebase.initializeApp(firebaseConfig)
