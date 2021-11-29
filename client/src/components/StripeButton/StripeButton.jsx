import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ Price }) => {
  const stripePrice = Price * 100;
  const publishableKey =
    "pk_test_51JdwPVSJkuuAr1njNcWcxZRNJWltpRV6CXYhu85rNPMOr5g2TwR79rSOROECebrFa4cDzqLJtTMdg4KMHLYKnJIM00RatX5D97";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token: token,
      },
    })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Inc"
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${Price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
