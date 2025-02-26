import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ_DivWqTud4hIxZHILcDUFeA7SIPJYts",
  authDomain: "todo-web-e6868.firebaseapp.com",
  projectId: "todo-web-e6868",
  storageBucket: "todo-web-e6868.firebasestorage.app",
  messagingSenderId: "1039297543544",
  appId: "1:1039297543544:web:7288819e0ec273118e5c8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }