import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import axios from "axios";

function Info() {
  const base_url = "http://localhost:8000"

const {id}=useParams()
console.log(id);//1

  const [contact,setContacts] = useState({})

  const fetchContact = async(id)=>{
      const result = await axios.get(`${base_url}/get-a-contact/${id}`)
      console.log(result.data.contacts);
      setContacts(result.data.contacts)
  }

  console.log(contact);

  useEffect(()=>{
      fetchContact(id)
  },[])

  return (
    <div>
      <div className="container-fluid">
        <div
          className="row shadow rounded p-5"
          style={{ marginLeft: "150px", marginRight: "150px" }}
        >
          <div className="col-6 border shadow rounded mt-5 mb-5 p-5 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              height={"200px"}
              width={"200px"}
              alt=""
            />
          </div>
          <div className="col-6 col-6 border shadow rounded mt-5 mb-5 p-5 text-center">
              <h1>{contact.name}</h1> <br />
              <h2>Address  :   {contact.address}</h2>
              <h2>Phone  :   {contact.phone}</h2>
              <h2>Email  :   {contact.email}</h2>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

