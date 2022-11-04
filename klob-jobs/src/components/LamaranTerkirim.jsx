import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { FetchingItems } from "../store/action/itemsAction";
import { useEffect } from "react";
import ListLamaran from "./ListLamaran";
import { useNavigate } from "react-router-dom";

const LamaranTerkirim = () => {
  const items = useSelector((state) => {
    return state.items;
  });
  const dispatch = useDispatch();

  const apllyJob = useSelector((state) => {
    return state.apllyJob;
  });
  console.log(apllyJob, "<<<< applyjob");

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Lamaran Terkirim</h1>

        {apllyJob.length ? (
          apllyJob.map((job) => {
            return <ListLamaran key={job.id} job={job} />;
          })
        ) : (
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h2>Belum ada lamaran yang terkirim</h2>

            <button onClick={home} type="submit" className="btn btn-primary">
              kembali ke home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LamaranTerkirim;
