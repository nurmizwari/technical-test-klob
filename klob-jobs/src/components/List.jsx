import React from "react";

const List = ({ item }) => {
  return (
    <div class="col-12 col-md-3 mt-3 mb-3">
      <div class="card bungkusCard">
        <img
          class=" card1 card-img-top"
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

          <div class="col mt-2">
            <button type="submit" class="btn btn-success">
              Kirim Lamaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
