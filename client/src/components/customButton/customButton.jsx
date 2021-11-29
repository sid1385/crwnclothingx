import React from "react";

import "./customButton.scss";
import { CustomButtonComponent } from "./customButtonStyles";

const CustomButton = ({
  children,

  ...otherbuttonprops
}) => {
  return (
    <CustomButtonComponent {...otherbuttonprops}>
      {children}
    </CustomButtonComponent>
  );
};

export default CustomButton;
