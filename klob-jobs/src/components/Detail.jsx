import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const params = useParams();
  const [detailJob, setDetailJob] = useState({
    jobVacancyCode: "",
    corporateLogo: "",
    corporateName: "",
    positionName: "",
    status: "",
    salaryFrom: "",
    salaryTo: "",
    postedDate: "",
  });

  const items = useSelector((state) => state.items);

  useEffect(() => {
    const detail = items.filter(
      (job) => job.jobVacancyCode === params.jobVacancyCode
    );
    setDetailJob(detail[0]);
  }, []);

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

  return (
    <div class="container  rounded mb-5 mt-5">
      <h4 class="mt-2">Detail Lowongan Pekerjaan</h4>
      <div class="card">
        <img
          className="card-img-top mx-auto p-2"
          src={detailJob.corporateLogo}
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
        <div class="card-body">
          <h5 class="card-title"> {detailJob.corporateName}</h5>
          <p class="card-text"> {detailJob.positionName} </p>
          {/* <p class="card-text"> {detailJob.descriptions} </p> */}
          <div dangerouslySetInnerHTML={{ __html: detailJob.descriptions }} />
          <p class="card-text">
            status: <p className="badge bg-secondary">{detailJob.status}</p>{" "}
          </p>
          <p class="card-text ">
            Gaji:{" "}
            <p className="badge bg-secondary">
              {" "}
              {detailJob.salaryFrom
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .slice(0, -3)}
              -
              {detailJob.salaryTo
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .slice(0, -3)}
            </p>
          </p>
          <div className="d-flex flex-row-reverse mb-2">
            <p class="card-text">{time(detailJob.postedDate)} </p>
          </div>
          <div className="col-12">
            <button className={"btn col-12 btn-success"}>KIRIM LAMARAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
