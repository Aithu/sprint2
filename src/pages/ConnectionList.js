import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllConnectionAction,
  updateRenderAction,
} from "../redux/ConnectionReducer";
import { AppNav } from "./AppNav";
import { useHistory } from "react-router-dom";
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
          {state.connection.connectionList.map((item, index) => (
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
