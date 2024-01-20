import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
function Header() {
  const gradientBackground = {
    background: 'linear-gradient(to right, #360033 , #0b8793)', // Replace with your desired gradient colors
  };
  return (
    <div>
      <MDBNavbar light className="p-2" style={gradientBackground}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <i class="fa-solid fs-1 m-2 ms-5 text-white fa-address-book"></i>
            <h2 className="text-white m-2" > ContactEase</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
