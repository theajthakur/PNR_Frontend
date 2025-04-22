import React, { useEffect, useState, useRef } from "react";
import "../styles/loaders/Network.css";

export default function Network() {
  const [loadWidth, setLoadWidth] = useState(0);
  const [loaderView, setLoaderView] = useState(true);
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
            throw new Error(
              "Network response was not ok " + response.statusText
            );
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
        });
    }

    checkServerStatus();
  }, []);

  return (
    <div
      className="networkLoader mb-5"
      style={{ height: loaderView ? "10px" : "0px" }}
    >
      <div
        className={`innerLoader ${loadWidth === 100 ? "bg-success" : ""}`}
        style={{ width: `${loadWidth}%` }}
      ></div>
    </div>
  );
}
