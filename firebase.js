import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiZUoJ08GNiwHfuSHupJJoX9v6rZ6KssU",
  authDomain: "signal-clone-ba6cb.firebaseapp.com",
  projectId: "signal-clone-ba6cb",
  storageBucket: "signal-clone-ba6cb.appspot.com",
  messagingSenderId: "287714823586",
  appId: "1:287714823586:web:ee7d14c291b2c3e2c6b6fb",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
