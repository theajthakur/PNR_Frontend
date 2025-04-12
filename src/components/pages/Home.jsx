import React, { useState } from "react";
import "../styles/Home.css";
import Motion from "../Motion";
import Circular from "../Circular";
import PnrDetails from "./PnrDetails";
export default function Home() {
  const [pnr, setPnr] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pnrData, setPnrData] = useState(null);
  function isNumber(input) {
    const pattern = /^-?\d*(\.\d*)?$/;
    return pattern.test(input.trim());
  }
  const apiUrl = import.meta.env.VITE_API_URL;

  const submitPnr = async () => {
    setErrorMsg(null);
    if (pnr.length != 10) return alert("Invalid PNR!");
    setLoading(true);
    const res = await fetch(`${apiUrl}/pnr/${pnr}`);
    const data = await res.json();
    setLoading(false);
    if (data?.status == "error") return setErrorMsg(data.message);
    setPnrData(data);
  };

  return (
    <div className="container align-items-center">
      <div className="text-center">
        <h1>Welcome to InstantPNR</h1>
        <p>Get your PNR status instantly</p>
      </div>
      <div className="pnr-search-section row justify-content-center">
        <div className="shadow-lg p-5 card col-md-11 col-lg-9 col-xl-8">
          {loading ? (
            <Circular />
          ) : (
            <div className="myInputGroup">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your PNR"
                value={pnr}
                onInput={(event) => {
                  const value = event.target.value;
                  if (isNumber(value) && value.length <= 10) setPnr(value);
                }}
              />
              {pnr.length === 10 ? (
                <button className="btn btn-primary" onClick={submitPnr}>
                  <span className="bi bi-search"></span>
                </button>
              ) : (
                ""
              )}
            </div>
          )}
          {errorMsg ? (
            <p className="text-center small lead m-0 mt-3 alert alert-danger">
              {errorMsg}
            </p>
          ) : pnrData && pnrData.status == "success" ? (
            <PnrDetails data={JSON.stringify(pnrData)} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
