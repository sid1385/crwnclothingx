import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "./../customButton/customButton";
import "./SignIn.scss";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);

    setCredentials({ email: "", password: "" });
  };

  const handleChange = (data) => {
    const { value, name } = data.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email id and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="button">
          <CustomButton type="submit" children="SIGN IN" />
          <CustomButton
            onClick={googleSignInStart}
            isgooglesignin
            type="button"
            children="SIGN IN WITH GOOGLE"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
