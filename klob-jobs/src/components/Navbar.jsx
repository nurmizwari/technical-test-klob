import { useState } from "react";
import AddLowongan from "./AddLowongan";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const lamaranTerkirim = () => {
    navigate("/lamaran-terkirim");
  };

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container">
          <Link to={"/"} class="navbar-brand">
            <img
              src="https://static.klob.id/img/landing-klobmeter-doors/klobicon.svg"
              alt=""
            />
          </Link>
          <div className="d-flex ">
            <p
              className="me-3"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Buat Lowongan
            </p>
            <p onClick={lamaranTerkirim} style={{ cursor: "pointer" }}>
              Lamaran Terkirim
            </p>
          </div>
        </div>
      </nav>
      <AddLowongan show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
