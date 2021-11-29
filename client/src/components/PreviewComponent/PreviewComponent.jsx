import React from "react";
import "./PreviewComponent.scss";
import ShopItem from "../ShopItem/ShopItem";
import { withRouter } from "react-router-dom";

const PreviewComponent = ({ title, items, history, match, routeName }) => {
  return (
    <div className="preview-component">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="item-container">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewComponent);
