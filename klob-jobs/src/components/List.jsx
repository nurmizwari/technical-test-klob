import React from "react";
import { useNavigate } from "react-router-dom";
const List = ({ item }) => {
  const navigate = useNavigate();

  const details = () => {
    navigate(`/detail-lowongan-pekerjaan/${item.jobVacancyCode}`);
  };

  return (
    <div class="col-12 col-md-3 mt-3 mb-3">
      <div onClick={details} class="card">
        <img
          class=" card1 card-img-top mx-auto "
          src={item.corporateLogo}
          style={{ width: 100 }}
        />
        <div class="card-body cardBody">
          <h5 class="card-title">{item.corporateName}</h5>
          <h5 class="card-text">{item.positionName}</h5>
          <h5 class="card-text">status: {item.status}</h5>
          <h5 class="card-text">
            Gaji: {item.salaryFrom} - {item.salaryTo}
          </h5>
          <h5 class="card-text"> {item.postedDate}</h5>

          <div className="row">
            <div class="col-12 mt-2">
              <button type="submit" class="btn col-12 btn-success">
                Kirim Lamaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
