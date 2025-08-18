import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBCIP6aiu6Nzfn17BEDoOOHaZpx5f76czE",
  authDomain: "netflix-clone-36f8a.firebaseapp.com",
  projectId: "netflix-clone-36f8a",
  storageBucket: "netflix-clone-36f8a.firebasestorage.app",
  messagingSenderId: "92809342434",
  appId: "1:92809342434:web:429ff418ab6d84d3b89dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    alert("Signup successful!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
  signOut(auth);
  toast("Logged Out")
};

export { auth, db, login, signup, logout };
