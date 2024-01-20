import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

function View() {


  const base_url = "http://localhost:8000";

  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-contacts`);
    console.log(result.data.contacts);
    setContacts(result.data.contacts);
  };
  console.log(contacts);

  const deleteContact = async (id) => {
    const result = await axios.delete(`${base_url}/delete-contact/${id}`);
    alert(result.data.message);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row ">
        <div className="col" style={{ position: "relative" }}>
          <img
            src="https://t4.ftcdn.net/jpg/06/39/41/59/360_F_639415988_WvcxJuA5mnCbsTwp2tXJl6H57keChCQT.jpg"
            width={"100%"}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <h1 className="border border-5 rounded p-5">
              ContactEase <i className="fa-solid fa-phone"></i> <br />Add, Delete, Update contacts
            </h1>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundImage:
            "url(https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg)",
        }}
      >
        <h1 className="text-center text-white mt-4 mb-3">
          Your Contacts
          <Link to="/add">
            <button className=" btn btn-lg fs-3 btn-warning float-end me-3 p-3">
              Add contacts <i class="fa-solid fa-user-plus"></i>{" "}
            </button>
          </Link>
        </h1>
        <div className="row justify-content-center">
          {contacts.map((item) => (
            <div
              key={item._id}
              className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
            >
              <Card style={{ width: "80%", marginLeft: "50px" }} className="border border-3 border-primary">
                <Card.Img
                  variant=""
                  src="https://www.iconbunny.com/icons/media/catalog/product/4/4/444.8-contacts-icon-iconbunny.jpg"
                  height={"200px"}
                  width={"50px"}
                />
                <Card.Body>
                  <Card.Title>Contact Details</Card.Title>
                  <Card.Text>
                    <strong>ID:</strong> {item.id} <br />
                    <strong>Name:</strong> {item.name} <br />
                    <strong>Address:</strong> {item.address} <br />
                    <strong>Phone:</strong> {item.phone} <br />
                    <strong>Email:</strong> {item.email} <br />
                  </Card.Text>
                </Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Link to={`/edit/${item.id}`}>
                  <button
                    className="btn btn-success custom-btn mb-5 mt-5"
                    style={{ marginLeft: "23px" }}
                    role="button"
                  >
                    <i className="fa-solid fa-user-pen"></i>
                  </button>
                  </Link>
                  <button
                    className="btn btn-danger custom-btn ms-5 mb-5 mt-5"
                    role="button"
                  >
                    <i
                      onClick={() => deleteContact(item.id)}
                      class="fa-solid fa-trash"
                    ></i>
                  </button>

                   <Link to={`/info/${item.id}`}>
                   <button
                      className="btn btn-primary custom-btn ms-5 mb-5 mt-5"
                      role="button"
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                   </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
