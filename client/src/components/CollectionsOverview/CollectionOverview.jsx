import React from "react";
import PreviewComponent from "../PreviewComponent/PreviewComponent";
import { convertCollectionsToArray } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-oveview">
      {collections.map(({ id, ...othercomponentprops }) => (
        <PreviewComponent key={id} {...othercomponentprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: convertCollectionsToArray,
});

export default connect(mapStateToProps)(CollectionOverview);
