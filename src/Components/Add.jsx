import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Add() {
    const [id,setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const base_url = "http://localhost:8000/add-contact"

    const location = useNavigate();

    const addContact=(e)=>{
      e.preventDefault()
      console.log(id,name,address,phone,email);
      const body = {
        id,
        name,
        address,
        phone,
        email,
      }
      const result = axios.post(base_url,body).then((result)=>{
        console.log(result);
        alert(result.data.message)
        location('/view')
      })
      .catch((error)=>{
        alert("Please enter a unique id")
      })
      }

  return (
    <div>
        <div className="container text-center">
          <h1 className="mt-3 text-primary text-decoration-underline">
            Add New Contact
          </h1>
          <form className="p-5 m-5 border shadow rounded">
            <MDBInput
              label="Id"
              id="formControlLg"
              onChange={(e)=>setId(e.target.value)}
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              label="Name"
              id="formControlLg"
              onChange={(e)=>setName(e.target.value)}
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              label="Address"
              id="formControlLg"
              onChange={(e)=>setAddress(e.target.value)}
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              label="Phone"
              id="formControlLg"
              onChange={(e)=>setPhone(e.target.value)}
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
              label="Email"
              id="formControlLg"
              onChange={(e)=>setEmail(e.target.value)}
              type="text"
              size="lg"
            />
            <br />

            <div>
              <button
                className="btn btn-primary p-3 m-4"
                onClick={(e)=>addContact(e)}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Add;
