import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row m-5">
          <div className="col-6 p-4">
            <marquee behavior="" direction="">
              <h2 className="text-primary">Welcome to ContactEase</h2>
            </marquee>

            <div className="container-fluid p-2 ms-2 me-4">
              <p style={{ textAlign: "justify" }}>
                Contact management is the process of recording contacts' details
                and tracking their interactions with a business. Such systems
                have gradually evolved into an aspect of customer relationship
                management (CRM) systems, which allow businesses to improve
                sales and service levels leveraging a wider range of data.By
                combining the tracking of contacts, their interactions with the
                business, and their preferences and service issues, it became
                possible to create a single, unified view of the customer --
                vital data not only for a successful sales team, but also for
                the delivery of excellent customer service.
              </p>
            </div>

            <div className="mt-4 text-center">
                <Link to='/view'>
                <button className="btn btn-lg rounded-pill btn-primary p-3 ">
                Show Contacts
              </button>
                </Link>
            </div>
          </div>
          <div className="col-6">
            <img src='https://website-assets-fw.freshworks.com/attachments/cjuwek45n01w4ztg0bh9cvq4q-contact-management-software.one-half.png' width={"100%"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
