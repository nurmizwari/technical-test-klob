import { useState } from "react";
import AddLowongan from "./AddLowongan";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Klob</a>
          <p onClick={handleShow}>Buat Lowongan</p>
        </div>
      </nav>
      <AddLowongan show={show} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
