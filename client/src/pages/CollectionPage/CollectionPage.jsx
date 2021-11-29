import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useParams } from "react-router-dom";

import "./CollectionPage.scss";
const CollectionPage = () => {
  const { categoryid } = useParams();
  const collection = useSelector(selectCollection(categoryid));
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="collection-items">
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.categoryid)(state),
// });

export default CollectionPage;
