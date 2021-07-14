import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllConnectionAction, updateRenderAction } from "../redux/store";
import { AppNav } from "./AppNav";
import { useHistory } from "react-router-dom";
// import {
//   Dropdown,
//   DropdownButton,
//   FormControl,
//   InputGroup,
// } from "react-bootstrap";

export const ConnectionList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllConnectionAction());
  }, []);

  return (
    <div>
      <AppNav />
      <div className="alert alert-secondary mb-0">
        <h3>Connection List</h3>
      </div>

      {/* <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup> */}

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>

            <th scope="col">ConsumerNumber</th>
            <th scope="col">ApplicationDate</th>
            <th scope="col">ConnectionDate</th>
            <th scope="col">ConnectionStatus</th>
            <th scope="col">Connectiontype</th>
            {/* <th scope="col"> address</th>
            <th scope="col"> customer</th> */}
          </tr>
        </thead>

        <tbody>
          {state.connectionList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.connectionId}</th>
              <td>{item.consumerNumber}</td>
              <td>{item.applicationDate}</td>
              <td>{item.connectionDate}</td>
              <td>{item.connectionStatus ? "True" : "False"}</td>
              <td>{item.connectiontype}</td>
              {/* <td>{item.address}</td>
              <td>{item.customer}</td> */}
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-success btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  // onClick={() => updateRecord(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
