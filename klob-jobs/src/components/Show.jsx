import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { FetchingItems } from "../store/action/itemsAction";
import { useEffect, useState } from "react";

const Show = () => {
  const items = useSelector((state) => {
    return state.items;
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const itemsBaru = useSelector((state) => {
    return state.itemsBaru;
  });

  useEffect(() => {
    setLoading(true);
    dispatch(FetchingItems())
      .then((result) => {})
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <img
          src="https://freefrontend.com/assets/img/css-loaders/loading.gif"
          alt=""
        />
      </div>
    );
  }
  // https://gifimage.net/wp-content/uploads/2017/10/buffering-gif-8.gif

  return (
    <div className="container">
      <div className="row">
        <h1>Lowongan Pekerjaan</h1>
        {items.map((item) => {
          return <List key={item.id} item={item} />;
        })}
        {itemsBaru &&
          itemsBaru.map((item) => {
            return <List key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Show;
