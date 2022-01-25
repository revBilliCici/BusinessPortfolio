import React, { useState } from "react";
import "./SignIn.css";
import { SectionHeader } from "../components";
import { Link } from "react-router-dom";

const SignIn = ({ handleSigninSubmit }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginSuccessfully, setLoginSuccessfully] = useState(true);
  return (
    <div className="flex justify-center p-5 lg:p-0">
      <div className="Header__container lg:w-11/12 w-full">
        <div>
          <form
            className="Form__Container flex flex-col gap-10 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              let response = handleSigninSubmit(Username, Password);
              console.log(response);
              if (response == "user not Found") {
                setLoginSuccessfully(false);
              } else {
                setLoginSuccessfully(true);
              }
            }}
          >
            <SectionHeader Heading={"SignIn"} />
            <input
              className="p-5 box-border w-full max-w-md"
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
                if (!LoginSuccessfully) {
                  setLoginSuccessfully(true);
                }
              }}
            />

            <input
              className="p-5 box-border w-full max-w-md"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                if (!LoginSuccessfully) {
                  setLoginSuccessfully(true);
                }
              }}
            />

            {!LoginSuccessfully && (
              <p className="text-red-700 text-xl p-5">Incorrect Credentials</p>
            )}

            <button type="submit" className="px-10 py-5">
              Signin
            </button>
            <div className="flex gap-2 Redirect__Register mt-14">
              <p>Don't have account?</p>
              <Link
                to={"/Register"}
                className="underline-offset-4 underline Redirect__Link"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
