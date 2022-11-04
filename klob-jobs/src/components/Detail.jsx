import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchingItems } from "../store/action/itemsAction";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
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
  console.log(detailJob, "<<< details job");

  return (
    <div class="container  rounded mb-5 mt-5">
      <h4 class="mt-2">Detail Lowongan Pekerjaan</h4>
      <div class="card">
        <img
          className="card-img-top mx-auto p-2"
          src={detailJob.corporateLogo}
          style={{ width: 200, height: 100 }}
        />
        <div class="card-body">
          <p class="card-title"> {detailJob.corporateName}</p>
          <p class="card-text"> {detailJob.positionName} </p>
          {/* <p class="card-text"> {detailJob.descriptions} </p> */}
          <div dangerouslySetInnerHTML={{ __html: detailJob.descriptions }} />
          <p class="card-text">status: {detailJob.status} </p>
          <p class="card-text">
            Gaji:{" "}
            {detailJob.salaryFrom
              .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
              .slice(0, -3)}
            -
            {detailJob.salaryTo
              .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
              .slice(0, -3)}
          </p>
          <p class="card-text">{detailJob.postedDate} </p>
          <div className="col-12">
            <button className={"btn col-12 btn-success"}>KIRIM LAMARAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
