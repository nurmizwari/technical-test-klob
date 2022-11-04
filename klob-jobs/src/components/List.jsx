import React from "react";
import { useNavigate } from "react-router-dom";
import { applyingJob } from "../store/action/itemsAction";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const List = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = () => {
    navigate(`/detail-lowongan-pekerjaan/${item.jobVacancyCode}`);
  };

  const [applied, setApplied] = useState(false);
  const [imageCheck, setImageCheck] = useState(false);

  const apply = () => {
    dispatch(applyingJob([item]));
    setApplied(true);
  };

  const apllyJob = useSelector((state) => state.apllyJob);
  console.log(apllyJob);

  const checkingApp = () => {
    const check = apllyJob.filter(
      (job) => job.jobVacancyCode === item.jobVacancyCode
    );
    if (check[0]) {
      console.log(check[0], "ini data <<<<<<");
      setApplied(true);
    }
  };
  // console.log(checkingApp, "<<checking");
  useEffect(() => {
    checkingApp();
  }, [apllyJob]);

  const imageChek = () => {
    setImageCheck(true);
    item.corporateLogo =
      "https://www.industrial-cloud.com/ic/img/company/no-logo-MANUFACTURER.png";
  };

  return (
    <div class="col-12 col-md-3 mt-3 mb-3">
      <div class="card h-100">
        <img
          onClick={details}
          class=" card1 card-img-top mx-auto "
          src={item.corporateLogo}
          style={{
            marginTop: 10,
            width: 100,
            height: 100,
            objectFit: "contain",
          }}
          onError={imageChek}
        />
        <div onClick={details} class="card-body">
          <h5 class="card-title">{item.corporateName}</h5>
          <p class="card-text ">{item.positionName}</p>
          <p class="card-text">
            status: <p className="badge bg-secondary">{item.status}</p>{" "}
          </p>
          <p class="card-text">
            Gaji:{" "}
            <p className="badge bg-secondary">
              {item.salaryFrom
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .slice(0, -3)}
              -
              {item.salaryTo
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .slice(0, -3)}
            </p>
          </p>
          <p class="card-text"> {item.postedDate}</p>
        </div>
        <div className="d-flex m-2 justify-content-center">
          <button
            onClick={apply}
            type="submit"
            className={`col-12 btn ${
              applied ? "btn-secondary disabled" : "btn-success"
            }`}
          >
            KIRIM LAMARAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
