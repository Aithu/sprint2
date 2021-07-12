import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeConnectionAction } from "../redux/store";
import { AppNav } from "./AppNav";

export const ConnectionUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formEl = useRef();

  const [ConsumerNumber, setConsumerNumber] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [connectionDate, setConnectionDate] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");
  const [connectiontype, setConnectionType] = useState("");

  const updateConsumerNumber = (e) => setConsumerNumber(e.target.value);
  const updateppplicationDate = (e) => setApplicationDate(e.target.value);
  const updateconnectionDate = (e) => setConnectionDate(e.target.value);
  const updateconnectionStatus = (e) => setConnectionStatus(e.target.value);
  const updateconnectiontype = (e) => setConnectionType(e.target.value);

  const addConnection = (e) => {
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());

    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        cretaeConnectionAction({
          ConsumerNumber,
          applicationDate,
          connectionDate,
          connectionStatus,
          connectiontype,
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
        <h3> ADD Connection</h3>
      </div>

      {state.progress && (
        <div className="mx-4 alert alert-success">
          Connection added Successfully
        </div>
      )}

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="text"
            value={ConsumerNumber}
            onChange={updateConsumerNumber}
            className="form-control form-control-lg mb-1"
            placeholder="Enter ConsumerNumber"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={applicationDate}
            onChange={updateppplicationDate}
            className="form-control form-control-lg mb-1"
            placeholder="Enter  applicationDate"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={connectionDate}
            onChange={updateconnectionDate}
            className="form-control form-control-lg mb-1"
            placeholder="Enter connectionDate "
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="text "
            value={connectionStatus}
            onChange={updateconnectionStatus}
            className="form-control form-control-lg mb-1"
            placeholder="Enter True or False"
            maxLength="12"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={connectiontype}
            onChange={updateconnectiontype}
            className="form-control form-control-lg mb-1"
            placeholder="Enter ConnectionType"
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="button"
            onClick={addConnection}
            value="Add Connection"
            className="btn btn-lg btn-success w-100"
          />
        </div>
      </form>
    </div>
  );
};
