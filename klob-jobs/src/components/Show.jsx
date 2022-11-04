import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { FetchingItems } from "../store/action/itemsAction";
import { useEffect } from "react";
import AddLowongan from "./AddLowongan";

const Show = () => {
  const items = useSelector((state) => {
    return state.items;
  });
  const dispatch = useDispatch();

  const itemsBaru = useSelector((state) => {
    return state.itemsBaru;
  });
  console.log(itemsBaru, "<< data baru");
  useEffect(() => {
    dispatch(FetchingItems());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Lowongan Pekerjaan</h1>
        {items.map((item) => {
          return <List key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Show;
