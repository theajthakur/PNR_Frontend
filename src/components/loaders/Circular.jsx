import React from "react";
import "../styles/loaders/Circular.css";

export default function Circular() {
  return (
    <div className="lds-ring mx-auto">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
