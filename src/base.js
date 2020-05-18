import * as firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYxudpXLAB8sfKXsrW-3pL1AbxWJHcN-0",
  authDomain: "frb-fls-example.firebaseapp.com",
  databaseURL: "https://frb-fls-example.firebaseio.com",
  projectId: "frb-fls-example",
  storageBucket: "frb-fls-example.appspot.com",
  messagingSenderId: "971492637412",
  appId: "1:971492637412:web:7726a345b7189eacc74af1",
};

export const app = firebase.initializeApp(firebaseConfig);
