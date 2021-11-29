import React, { useEffect } from "react";

import "./App.css";
import HomePage from "./pages/HomePage//HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/signinandsignup/signinandsignup";
import CheckOut from "./pages/CheckOut/CheckOut";
import { auth, createUserProfileDocument } from "./FireBase/firebase.config";
import { setCurrentUser, checkUserSession } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { userSelector } from "./redux/user/user-selectors";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={ShopPage} />
        <Route exact path="/Checkout" component={CheckOut} />
        <Route
          exact
          path="/SignUp"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <HomePage />
      </Switch>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: userSelector,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

export default App;
