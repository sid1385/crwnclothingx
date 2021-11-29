import React, { useEffect } from "react";
import CollectionOverview from "../../components/CollectionsOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

import { connect } from "react-redux";
import { shopItemFetchStart } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { isCollectionFetched } from "../../redux/shop/shop-selectors";

import { createStructuredSelector } from "reselect";
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = ({ match, isFetching, fetchShopItemFromFirebaseAsync }) => {
  useEffect(() => {
    fetchShopItemFromFirebaseAsync();
  }, [fetchShopItemFromFirebaseAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isloading={isFetching} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:categoryid`}
        render={(props) => (
          <CollectionPageWithSpinner isloading={isFetching} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchShopItemFromFirebaseAsync: () => dispatch(shopItemFetchStart()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: isCollectionFetched,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
