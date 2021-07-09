import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeCustomerAction } from "./Redux/Store";
import { AppNav } from "./AppNav";

export const CustomerUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formEl = useRef();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");


  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateMiddleName = (e) => setMiddleName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);

  console.log(e.target.value);
  const numericValue = e.target.value.replace(/[^\d]/gi, "");
  setMobileNumber(numericValue);
};

const updateGender = (e) => setGender(e.target.value);

const addNewCustomer = (e) => {
 e.preventDefault();

  const isFormValid = formEl.current.checkValidity();
  if (isFormValid) {
    dispatch(
      cretaeCustomerAction({
        firstName,
        middleName,
        lastName,
       
      })
    );
  } else {
    e.stopPropagation();
    formEl.current.classList.add("was-validated");
  }
};
return (

  <div>
    <AppNav />
    <div className="alert alert-secondary">
      <h3>Customer Register</h3> 
    </div>

    {state.progress && (
      <div className="mx-4 alert alert-success">
        Customer added Successfully
      </div>
    )}

    <form ref={formEl} className="mx-4 needs-validation" noValidate>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={updateFirstName}
          className="form-control form-control-lg mb-1"
          placeholder="Enter First Name"
          minLength="3"
          maxLength="30"
          required
        />
      </div>

      <div>
        <input
          type="text"
          value={middleName}
          onChange={updateMiddleName}
          className="form-control form-control-lg mb-1"
          placeholder="Enter Middle Name"
          minLength="3"
          maxLength="30"
          required
        />
      </div>

      <div>
        <input
          type="text"
          value={lastName}
          onChange={updateLastName}
          className="form-control form-control-lg mb-1"
          placeholder="Enter Last Name"
          minLength="3"
          maxLength="30"
          required
        />
      </div>

     
      <div>
        <input
          type="button"
          onClick={addNewCustomer}
          value="Add Customer"
          className="btn btn-lg btn-success w-100"
        />
      </div>
    </form>
  </div>
 );
 };