import React from "react";
import "../styles/PnrDetails.css";

export default function PnrDetails({ data }) {
  const parsedData = JSON.parse(data);
  if (!parsedData || parsedData.status !== "success") {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        Unable to fetch PNR details. Please try again.
      </div>
    );
  }

  const pnr = parsedData.data;

  return (
    <div className="container mt-4 pnr_data_container">
      <h2 className="mb-4">
        <i className="bi bi-train-front me-2"></i>PNR Details
      </h2>

      <div className="overflow-x-scroll w-100">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>PNR Number</th>
              <td>{pnr.pnrNumber}</td>
            </tr>
            <tr>
              <th>Train</th>
              <td>
                {pnr.trainNumber} - {pnr.trainName}
              </td>
            </tr>
            <tr>
              <th>Journey Date</th>
              <td>{pnr.dateOfJourney}</td>
            </tr>
            <tr>
              <th>From / To</th>
              <td>
                {pnr.sourceStation} → {pnr.destinationStation}
              </td>
            </tr>
            <tr>
              <th>Boarding / Reservation Upto</th>
              <td>
                {pnr.boardingPoint} → {pnr.reservationUpto}
              </td>
            </tr>
            <tr>
              <th>Class</th>
              <td>{pnr.journeyClass}</td>
            </tr>
            <tr>
              <th>Chart Status</th>
              <td>{pnr.chartStatus}</td>
            </tr>
            <tr>
              <th>Quota</th>
              <td>{pnr.quota}</td>
            </tr>
            <tr>
              <th>Vikalp Status</th>
              <td>{pnr.vikalpStatus}</td>
            </tr>
            <tr>
              <th>Total Fare</th>
              <td>₹{pnr.ticketFare}</td>
            </tr>
            <tr>
              <th>Distance</th>
              <td>{pnr.distance} km</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-5 mb-3">
        <i className="bi bi-people-fill me-2"></i>Passenger List
      </h4>

      <div className="overflow-x-scroll w-100">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Booking Status</th>
              <th>Current Status</th>
              <th>Coach</th>
              <th>Berth No.</th>
              <th>Berth Code</th>
              <th>Quota</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {pnr.passengerList.map((p, index) => (
              <tr key={index}>
                <td>{p.passengerSerialNumber}</td>
                <td>{p.bookingStatusDetails}</td>
                <td>{p.currentStatusDetails}</td>
                <td>{p.currentCoachId}</td>
                <td>{p.currentBerthNo}</td>
                <td>{p.currentBerthCode}</td>
                <td>{p.passengerQuota}</td>
                <td>{p.passengerNationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-end text-muted mt-3">
        <i className="bi bi-clock me-2"></i>
        Fetched on: {pnr.timeStamp}
      </div>
    </div>
  );
}
