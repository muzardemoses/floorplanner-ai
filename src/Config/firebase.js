import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHVCbJk1qKMXKuIk6of-JYP6L0y5y_A0c",
  authDomain: "floorplanner-ai.firebaseapp.com",
  projectId: "floorplanner-ai",
  storageBucket: "floorplanner-ai.appspot.com",
  messagingSenderId: "338138622255",
  appId: "1:338138622255:web:77d30e99b0454dbd3899da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);
  console.log(snapShot);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

function getCurrentUser() {
  const user = auth.currentUser;
  if (user) {
    // Fetch user document from Firestore
    const q = query(collection(db, "users"), where("email", "==", user.email));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userInfo = doc.data();
        console.log(userInfo.created_at.toDate()); // log creation date as a Date object
        console.log(userInfo.last_login ? userInfo.last_login.toDate() : null); // log last login time as a Date object or null
      });
    });
    return user;
  } else {
    return null;
  }
}

export {
  app,
  auth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  provider,
  getCurrentUser,
  onAuthStateChanged,
  GoogleAuthProvider,
};
