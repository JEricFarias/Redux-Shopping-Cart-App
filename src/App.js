import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggerdIn = useSelector((state) => state.auth.isLoggerdIn);

  console.log("isLoggerdIn", isLoggerdIn);
  return <div className="App">{isLoggerdIn ? <Layout /> : <Auth />}</div>;
}

export default App;
