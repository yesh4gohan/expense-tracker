import React from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import config from './aws-config';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: config.apiGateway.name,
        endpoint:
          config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Layout}/>

      </Switch>
    </div>
    <Route exact path="*" component = {()=><div> 404 not found</div>}/>
    </Router>
  );
}

export default App;
