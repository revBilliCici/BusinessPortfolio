import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components";

const SignUp = ({ handleSignUpSubmit }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  return (
    <div className="flex justify-center p-5 lg:p-0">
      <div className="Header__container lg:w-11/12 w-full">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let user = {
                firstName,
                lastName,
                userName,
                email,
                password,
                dateofBirth,
                profilePicture,
              };
              handleSignUpSubmit(user);
            }}
            className="Form__Container flex flex-col gap-10 items-center"
          >
            <SectionHeader Heading={"SignUp"} />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="text"
              name="firstName"
              placeholder="FirstName"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="text"
              name="lastName"
              placeholder="LastName"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="text"
              name="userName"
              placeholder="UserName"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="date"
              name="dateofBirth"
              onChange={(e) => {
                setdateofBirth(e.target.value);
              }}
            />
            <input
              required
              className="p-5 box-border w-full max-w-md"
              type="file"
              placeholder="Profile Picture"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setprofilePicture(e.target.value);
              }}
            />
            <button type="submit" className="px-10 py-5">
              SignUp
            </button>
            <div className="flex gap-2 Redirect__Register mt-14">
              <p>Already have account?</p>
              <Link
                to={"/login"}
                className="underline-offset-4 underline Redirect__Link"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
