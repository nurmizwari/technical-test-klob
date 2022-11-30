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
    dispatch(applyingJob(item));
    setApplied(true);
  };

  const apllyJob = useSelector((state) => state.apllyJob);

  const checkingApp = () => {
    const check = apllyJob.filter(
      (job) => job.jobVacancyCode === item.jobVacancyCode
    );
    if (check[0]) {
      setApplied(true);
    }
  };

  const time = (inputDate) => {
    let date = new Date(inputDate);
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " tahun yang lalu";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " bulan yang lalu";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " hari yang lalu";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " jam yang lalu";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " menit yang lalu";
    }
    return Math.floor(seconds) + " detik yang lalu";
  };

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
      <div class="card cardd h-100">
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
          <div className="d-flex flex-row-reverse">
            <p class="card-text"> {time(item.postedDate)}</p>
          </div>
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
