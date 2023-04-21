import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { selectUser } from "../Features/userSlice";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  auth,
  provider,
  createUserProfileDocument,
} from "../Config/firebase.js";
import { getFirestore } from "firebase/firestore";
import logo from "../Images/logo.png";
import googleSvg from "../Images/google.svg";

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    return () => {};
  }, [user]);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, {
        displayName,
        email,
      });
    } catch (error) {
      setError(error.message);
      setHasError(true);
    }
  };

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <div className="pt-24 h-screen flex flex-col items-center w-full text-center">
        <img src={logo} alt="logo" className="h-8" />
        <form onSubmit={onSubmit}>
          <h3 className="font-semibold text-3xl text-gray-900 mt-6 mb-3">
            We're Glad Your Here!
          </h3>
          <p className="text-base font-normal text-gray-600">
            Enter your details to create a free account.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <label htmlFor="name" className="flex flex-col gap-1.5">
              <p className="text-sm font-medium text-gray-700 text-left">
                Name
              </p>
              <input
                className="h-11 border border-solid bg-white border-gray-300 font-normal 
             text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border- 
          purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 
              focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 
              disabled:text-gray-500 after:bg-white"
                style={{ width: "360px" }}
                id="name"
                type="name"
                placeholder="Enter your name"
                required
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                {...(hasError && {
                  style: {
                    border: "1px solid red",
                    width: "360px",
                  },
                })}
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1.5">
              <p className="text-sm font-medium text-gray-700 text-left">
                Email
              </p>
              <input
                className="h-11 border border-solid bg-white border-gray-300 font-normal 
             text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border- 
          purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 
              focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 
              disabled:text-gray-500 after:bg-white"
                style={{ width: "360px" }}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                {...(hasError && {
                  style: {
                    border: "1px solid red",
                    width: "360px",
                  },
                })}
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-1.5">
              <p className="text-sm font-medium text-gray-700 text-left">
                Password
              </p>
              <input
                className="h-11 border border-solid bg-white border-gray-300 font-normal 
             text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border- 
          purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 
              focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 
              disabled:text-gray-500 after:bg-white"
                style={{ width: "360px" }}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                {...(hasError && {
                  style: {
                    border: "1px solid red",
                    width: "360px",
                  },
                })}
              />
              <p>
                {hasError && (
                  <span
                    className="text-red-500 text-sm inline-block"
                    style={{ width: "360px" }}
                  >
                    {error}
                  </span>
                )}
              </p>
              <p className="text-sm font-normal text-gray-600">
                Must be at least 8 characters.
              </p>
            </label>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="h-11 text-white    rounded-lg border-solid font-semibold text-base 
               border-teal-600 hover:bg-teal-700  bg-teal-600 border    
                hover:border-teal-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 
               focus:ring-offset-gray-100 flex items-center justify-center gap-3
            ,   disabled:cursor-not-allowed"
              style={{ width: "360px" }}
            >
              Get Started
            </button>
          </div>
        </form>
        <button
          class="h-11 text-gray-700  rounded-lg border-solid font-semibold text-base mt-4
               border-gray-300  bg-white border hover:border-gray-300 hover:bg-gray-50
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 
               focus:ring-offset-gray-100 flex items-center justify-center gap-3
            ,   disabled:cursor-not-allowed"
          style={{ width: "360px" }}
          onClick={signInWithGoogle}
        >
          <img src={googleSvg} alt="google-icon" height="24" width="24" />
          Sign in with Google
        </button>
        <div className="flex gap-2 mt-8 items-center">
          <p className="text-sm font-normal text-gray-600 ">
            Already have an account?
          </p>
          <p className="text-teal-700 font-semibold">
            <NavLink to="/login">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
