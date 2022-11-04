import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addedItems } from "../store/action/itemsAction";

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
    console.log(formAdd);
    dispatch(addedItems(formAdd));
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
            <label>
              Logo Perusahaan <span class="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  corporateLogo: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              // required
            />
          </div>
          <div class="mb-3">
            <label>
              Nama Perusahaan <span class="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  corporateName: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label>
              Nama Lowongan <span class="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  positionName: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label>
              Status Karyawan <span class="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  status: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <div className="row">
              <div className="col">
                <label>
                  Kisaran Gaji Karyawan
                  <span class="text-danger fw-bold">*</span>
                </label>
                <input
                  onChange={(e) => {
                    setFormAdd({
                      ...formAdd,
                      salaryFrom: e.target.value,
                    });
                  }}
                  type="number"
                  class="form-control"
                  // required
                />
              </div>

              <div className="col">
                <label>
                  <span class="text-danger fw-bold">*</span>
                </label>
                <input
                  onChange={(e) => {
                    setFormAdd({
                      ...formAdd,
                      salaryTo: e.target.value,
                    });
                  }}
                  type="number"
                  class="form-control"
                  // required
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label>
              Tanggal Posting
              <span class="text-danger fw-bold">*</span>
            </label>
            <input
              onChange={(e) => {
                setFormAdd({
                  ...formAdd,
                  postedDate: e.target.value,
                });
              }}
              type="date"
              class="form-control"
              // required
            />
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
