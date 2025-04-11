import React, { useState } from "react";
import "../styles/Home.css";
export default function Home() {
  const [pnr, setPnr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  function isNumber(input) {
    const pattern = /^-?\d*(\.\d*)?$/;
    return pattern.test(input.trim());
  }
  const apiUrl = import.meta.env.VITE_API_URL;

  const submitPnr = async () => {
    if (pnr.length != 10) return alert("Invalid PNR!");
    const res = await fetch(`${apiUrl}/pnr/${pnr}`);
    const data = await res.json();
    if (data?.status == "error") return setErrorMsg(data.message);
  };

  return (
    <div className="container align-items-center">
      <div className="text-center">
        <h1>Welcome to InstantPNR</h1>
        <p>Get your PNR status instantly</p>
      </div>
      <div className="pnr-search-section row justify-content-center">
        <div className="shadow-lg p-5 card col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
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
          {errorMsg ? (
            <p className="text-center small lead m-0 mt-3 alert alert-danger">
              {errorMsg}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
