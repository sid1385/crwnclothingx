import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../customButton/customButton";
import "./SignUp.scss";

import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user-actions";

const SignUp = ({ emailSignUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (data) => {
    const { value, name } = data.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const { displayName, email, password, confirmpassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      alert("password don't match");
      return;
    }

    emailSignUpStart({ email, password, displayName });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   //Investigate why it is dome like this
    //   await createUserProfileDocument(user, { displayName });
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmpassword: "",
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div className="signUp">
      <h2>I do not have a account</h2>
      <span>Sign Up with Email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="displayName"
          name="displayName"
          value={displayName}
          label="displayName"
          onChange={handleChange}
          required
        />
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
        <FormInput
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
          label="confirmpassword"
          required
        />
        <CustomButton type="submit" children="SIGN UP" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (emailpw) => dispatch(emailSignUpStart(emailpw)),
});

export default connect(null, mapDispatchToProps)(SignUp);
