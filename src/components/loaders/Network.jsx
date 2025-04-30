import React, { useEffect, useState, useRef } from "react";
import "../styles/loaders/Network.css";

export default function Network() {
  const [loadWidth, setLoadWidth] = useState(0);
  const [loaderView, setLoaderView] = useState(true);
  const [error, setError] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    function animateLoader() {
      animationRef.current = setInterval(() => {
        setLoadWidth((prevWidth) => {
          if (prevWidth < 90) {
            return prevWidth + Math.floor(Math.random() * 10);
          } else {
            clearInterval(animationRef.current);
            return prevWidth;
          }
        });
      }, 300);
    }

    function checkServerStatus() {
      animateLoader();
      fetch("https://pnr-backend.onrender.com/pnr/2233414076")
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData) => {
              console.log(errorData.status);
              setError(errorData.message || "Something went wrong");
              clearInterval(animationRef.current);
              setLoaderView(false);
              throw new Error(
                `API error: ${response.status} - ${
                  errorData.message || "Unknown error"
                }`
              );
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          clearInterval(animationRef.current);
          setLoadWidth(100);
          setTimeout(() => {
            setLoaderView(false);
          }, 1000);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          setLoadWidth(0);
        });
    }

    checkServerStatus();
  }, []);

  return (
    <>
      {error ? (
        <div className="alert alert-danger rounded-0  mb-0" role="alert">
          <div className="d-inline-flex w-100 justify-content-center align-items-center">
            <div className="alert-container">
              <p className="lead m-0">{error}</p>
            </div>
            <div className="ms-auto">
              <button
                className="btn btn-danger me-3"
                onClick={() => {
                  setError(null);
                }}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="networkLoader mb-5"
        style={{ height: loaderView ? "10px" : "0px" }}
      >
        <div
          className={`innerLoader ${loadWidth === 100 ? "bg-success" : ""}`}
          style={{ width: `${loadWidth}%` }}
        ></div>
      </div>
    </>
  );
}
