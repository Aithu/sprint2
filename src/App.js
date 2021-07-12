import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ConnectionUpsert } from "./pages/ConnectionUpsert";
// import { CustomerList } from "./pages/CustomerList";

function App() {
  return (
    <Router>
      <Route exact path="/connection-upsert" component={ConnectionUpsert} />

      <Route exact path="/" component={ConnectionUpsert} />
      {/* <Route exact path="/customer-list" component={CustomerList} /> */}

      {/* <Route exact path="/customer-upsert" component={CustomerById} />
      <Route exact path="/" component={CustomerById} /> */}
    </Router>
  );
}

export default App;
