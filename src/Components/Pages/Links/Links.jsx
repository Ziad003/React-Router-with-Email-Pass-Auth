import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../FirebaseInit/FirebaseInit";

const Links = () => {
  const [getUser, setGetUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setGetUser(false);
    setErrorMsg("");
    if (!emailRegex.test(email)) {
      setErrorMsg(
        "Please enter a valid email address (e.g., example@gmail.com).",
      );
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMsg(
        "Password must be at least 6 characters and contain an uppercase letter, a lowercase letter, and a special character.",
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setGetUser(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up Now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="" onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              {getUser ? (
                <p className="text-green-400">Sign up successful</p>
              ) : (
                ""
              )}
              {errorMsg ? <p className="text-red-400">{errorMsg}</p> : ""}
              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
