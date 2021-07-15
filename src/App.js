import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ConnectionUpsert } from "./pages/ConnectionUpsert";
import { ConnectionList } from "./pages/ConnectionList";
import { Address } from "./pages/Address";

function App() {
  return (
    <Router>
      <Route exact path="/connection-upsert" component={ConnectionUpsert} />

      <Route exact path="/" component={ConnectionUpsert} />
      <Route exact path="/connection-list" component={ConnectionList} />
      <Route exact path="/reader" component={Address} />

      {/* <Route exact path="/customer-upsert" component={CustomerById} />
      <Route exact path="/" component={CustomerById} /> */}
    </Router>
  );
}

export default App;
