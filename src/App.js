import React from "react";
import "./App.css";
import { Home, About, Dashboard, Login, Register } from "./Pages";
import { DashboardLayout, AuthLayout, DefaultLayout } from "./Layouts";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChanged,
  auth,
  createUserProfileDocument,
} from "./Config/firebase.js";
import { getFirestore, getDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { loginUser} from './Features/userSlice'

function App() {
  const db = getFirestore();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      if (!userRef) return;

      const snapShot = await getDoc(userRef);
      if (!snapShot.exists()) return;
      const user = snapShot.data();
      dispatch(
        loginUser({
          user: user,
          id: snapShot.id,
        })
      );

      localStorage.setItem("user", JSON.stringify(user));
    } else {
    }
  });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
