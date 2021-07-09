import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CustomerUpsert } from "./CustomerUpsert";

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={EmployeeList} /> */}
      <Route exact path="/customer-upsert" component={CustomerUpsert} />

      <Route exact path="/" component={CustomerUpsert} />

      {/* <Route exact path="/customer-upsert" component={CustomerById} />
      <Route exact path="/" component={CustomerById} /> */}
    </Router>
  );
}

export default App;
