import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ConnectionUpsert } from "./pages/ConnectionUpsert";
import { ConnectionList } from "./pages/ConnectionList";
import { ConnectionFind } from "./pages/ConnectionFind";
// import { InActive } from "/pages./InActive";
import { InActive } from "./pages/InActive";

import { Address } from "./pages/Address";
import { ViewConnection } from "./pages/ViewConnection";

function App() {
  return (
    <Router>
      <Route exact path="/connection-upsert" component={ConnectionUpsert} />

      <Route exact path="/" component={ConnectionUpsert} />
      <Route exact path="/connection-list" component={ConnectionList} />
      <Route exact path="/address" component={Address} />
      <Route exact path="/active" component={ConnectionFind} />
      <Route exact path="/inactive" component={InActive} />
    </Router>
  );
}

export default App;
