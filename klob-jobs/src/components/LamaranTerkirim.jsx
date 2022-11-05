import React from "react";

import { useSelector } from "react-redux";

import ListLamaran from "./ListLamaran";
import { useNavigate } from "react-router-dom";

const LamaranTerkirim = () => {
  const apllyJob = useSelector((state) => {
    return state.apllyJob;
  });

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
