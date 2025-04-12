import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4 text-success">About This App</h2>
          <p className="card-text">
            This app is designed to fetch and display Indian Railway PNR details
            in a simplified, user-friendly way. It combines the power of{" "}
            <strong>Puppeteer</strong> for browser automation and{" "}
            <strong>OCR (Optical Character Recognition)</strong> to solve
            captchas during the data scraping process.
          </p>
          <p className="card-text">
            Built with modern technologies like <strong>ReactJS</strong> for
            frontend and <strong>NodeJS</strong> for backend automation, the app
            demonstrates how automation can simulate real user interactions with
            complex systems such as IRCTC.
          </p>
          <p className="card-text">
            The app is fast, minimal, and built with Bootstrap for responsive
            UI, providing a smooth experience across devices.
          </p>
          <p className="text-muted">
            Created with 💡 and curiosity, to explore the possibilities of
            automation, OCR, and real-time data rendering.
          </p>
        </div>
      </div>
    </div>
  );
}
