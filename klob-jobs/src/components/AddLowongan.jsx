import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addedItems } from "../store/action/itemsAction";
import Swal from "sweetalert2";

const AddLowongan = (props) => {
  const { show, handleClose } = props;
  const [formAdd, setFormAdd] = useState({
    corporateLogo: "",
    corporateName: "",
    positionName: "",
    status: "",
    salaryFrom: 0,
    salaryTo: 0,
    postedDate: "",
  });

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addedItems(formAdd));
    setTimeout(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success Add Job",
        showConfirmButton: false,
        timer: 1500,
      });
    }, 1000);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buat Lowongan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <form onSubmit={add}>
          <div class="mb-3">
            <label>Logo Perusahaan</label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  corporateLogo: e.target.value,
                });
              }}
              type="text"
              class={`form-control ${
                !formAdd.corporateLogo.length ? "is-invalid" : "is-valid"
              }`}
              required
              placeholder="Ketikan Logo Perusahaan"
            />
            <span>Dalam bentuk link url</span>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3">
            <label>Nama Perusahaan</label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  corporateName: e.target.value,
                });
              }}
              type="text"
              class={`form-control ${
                !formAdd.corporateName.length ? "is-invalid" : "is-valid"
              }`}
              required
              placeholder="Ketikan Nama Perusahaan"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3">
            <label>Nama Lowongan</label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  positionName: e.target.value,
                });
              }}
              type="text"
              class={`form-control ${
                !formAdd.positionName.length ? "is-invalid" : "is-valid"
              }`}
              required
              placeholder="Ketikan Nama Lowongan Perusahaan"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3">
            <label>Status Karyawan</label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  status: e.target.value,
                });
              }}
              type="text"
              class={`form-control ${
                !formAdd.status.length ? "is-invalid" : "is-valid"
              }`}
              required
              placeholder="Ketikan Status Karyawan Perusahaan"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div class="mb-3">
            <div className="row">
              <div className="col">
                <label>Kisaran Gaji Karyawan</label>
                <input
                  onChange={(e) => {
                    setFormAdd({
                      ...formAdd,
                      salaryFrom: e.target.value,
                    });
                  }}
                  type="number"
                  class={`form-control ${
                    !formAdd.salaryFrom.length ? "is-invalid" : "is-valid"
                  }`}
                  required
                  placeholder="5.000.000"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col">
                <label></label>
                <input
                  onChange={(e) => {
                    setFormAdd({
                      ...formAdd,
                      salaryTo: e.target.value,
                    });
                  }}
                  type="number"
                  class={`form-control ${
                    !formAdd.salaryTo.length ? "is-invalid" : "is-valid"
                  }`}
                  required
                  placeholder="10.000.000"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label>Tanggal Posting</label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  postedDate: e.target.value,
                });
              }}
              type="date"
              class={`form-control ${
                !formAdd.postedDate.length ? "is-invalid" : "is-valid"
              }`}
              required
            />

            <div className="valid-feedback">Looks good!</div>
          </div>

          <Button className="me-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default AddLowongan;
