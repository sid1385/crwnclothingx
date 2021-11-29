import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./signinandsignup.scss";

const SignInAndSignUp = () => {
  return (
    <div className="signinandsignup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
