import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FetchingItems } from "../store/action/itemsAction";
import { useEffect } from "react";
import { deletingJob } from "../store/action/itemsAction";
import Swal from "sweetalert2";

const ListLamaran = ({ job }) => {
  const navigate = useNavigate();
  console.log(job, "<<< jobbb");
  useEffect(() => {
    dispatch(FetchingItems());
  }, []);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const deleteApply = () => {
    dispatch(deletingJob(job));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Success Deleted Job",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (!job) {
    return <h2>Loading ..</h2>;
  }

  return (
    <div class="col-12 col-md-3 mt-3 mb-3">
      <div class="card h-100">
        <img
          class=" card1 card-img-top mx-auto "
          src={job.corporateLogo}
          style={{
            marginTop: 10,
            width: 100,
            height: 100,
            objectFit: "contain",
          }}
        />
        <div class="card-body cardBody">
          <h5 class="card-title">{job.corporateName}</h5>
          <p class="card-text ">{job.positionName}</p>
          <p class="card-text">
            status: <p className="badge bg-secondary">{job.status}</p>{" "}
          </p>
          <p class="card-text">
            Gaji:{" "}
            <p className="badge bg-secondary">
              {job.salaryFrom
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
                .slice(0, -3)}
              -
              {job.salaryTo
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
                .slice(0, -3)}
            </p>
          </p>
          <p class="card-text"> {job.postedDate}</p>

          <div className="row">
            <div class="col-12 mt-2">
              <button
                onClick={deleteApply}
                type="submit"
                class="btn col-12 btn-warning"
              >
                Batalkan Lamaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListLamaran;
