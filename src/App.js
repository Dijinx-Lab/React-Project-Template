import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./navigation/layout";
import "./App.css";
import "./i18n/i18n";

function App() {
  return (
      <Router>
        <Layout />
      </Router>
  );
}

export default App;