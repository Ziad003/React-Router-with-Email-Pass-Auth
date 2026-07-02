import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../../FirebaseInit/FirebaseInit";

const LogIn = () => {
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccessMsg("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccessMsg("Successful");
        e.target.reset();
        if (!result.user.emailVerified) {
          alert("Please logIn to your email and verify first");
        }
      })
      .catch((error) => {
        setError(error.message.value);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log("forgetPass Clicked", email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset mail has been sent");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                ref={emailRef}
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover" onClick={handleForgetPassword}>
                  Forgot password?
                </a>
              </div>
              {error && <p className="text-red-400">{error}</p>}
              {successMsg && <p className="text-green-400">{successMsg}</p>}
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
