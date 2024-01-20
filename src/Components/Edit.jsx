import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [pid, setId] = useState("");
  const [pname, setName] = useState("");
  const [paddress, setAddress] = useState("");
  const [pphone, setPhone] = useState("");
  const [pemail, setEmail] = useState("");

  //to get a particular contact details
  const { id } = useParams();
  console.log(id);

  const base_url = "http://localhost:8000";

  const fetchContact = async(id) => {
    const result = await axios.get(`${base_url}/get-a-contact/${id}`);
    console.log(result.data.contacts);
    setId(result.data.contacts.id);
    setName(result.data.contacts.name);
    setAddress(result.data.contacts.address);
    setPhone(result.data.contacts.phone);
    setEmail(result.data.contacts.email);
  };

  useEffect(() => {
    fetchContact(id);
  }, []);

  const location = useNavigate();
  //update an employee function call
  const updateContact = async(e) =>{
    e.preventDefault();
    const body = {
      id: pid,
      name: pname,
      address: paddress,
      phone: pphone,
      email: pemail,
    };
    const result = await axios.post(`${base_url}/update-a-contact/${id}`, body);
    console.log(result);
    alert(result.data.message);
    location("/view"); //back to admin page
  }

  return (
    <div>
      <div className="container text-center">
        <h1 className="mt-3 text-primary text-decoration-underline">
          Update Contact
        </h1>
        <form className="p-5 m-5 border shadow rounded">
          <MDBInput
            label="Id"
            id="formControlLg"
            onChange={(e) => setId(e.target.value)} value={pid}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Name"
            id="formControlLg"
            onChange={(e) => setName(e.target.value)} value={pname}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Address"
            id="formControlLg"
            onChange={(e) => setAddress(e.target.value)} value={paddress}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Phone"
            id="formControlLg"
            onChange={(e) => setPhone(e.target.value)} value={pphone}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Email"
            id="formControlLg"
            onChange={(e) => setEmail(e.target.value)} value={pemail}
            type="text"
            size="lg"
          />
          <br />

          <div>
            <button
              className="btn btn-primary p-3 m-4"
                onClick={(e) => updateContact(e)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
