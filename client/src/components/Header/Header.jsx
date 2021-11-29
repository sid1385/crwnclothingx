import React from "react";

import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { userSelector } from "../../redux/user/user-selectors";
import { connect } from "react-redux";
import "./Header.scss";
import { auth } from "./../../FireBase/firebase.config";
import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {
  HeaderComponent,
  LogoContainer,
  Options,
  OptionLink,
  OptionDiv,
} from "./HeaderStyles";
import { signOutStart } from "../../redux/user/user-actions";
const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderComponent>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Options>
        <OptionLink to="/Shop">SHOP</OptionLink>
        <OptionLink to="/Contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => signOutStart()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/SignUp">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </Options>
      {hidden ? <CartDropdown /> : null}
    </HeaderComponent>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
