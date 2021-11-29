import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinnerStyles";
const WithSpinner = (WrappedComponent) => ({ isloading, ...otherprops }) => {
  return isloading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherprops} />
  );
};

export default WithSpinner;
