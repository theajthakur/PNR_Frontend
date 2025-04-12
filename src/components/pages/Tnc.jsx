import React from "react";
export default function Tnc() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Terms & Conditions</h2>
          <p className="card-text">
            This application utilizes <strong>real-time scraping</strong> via{" "}
            <strong>Puppeteer (Node.js)</strong> to fetch PNR details from the
            official IRCTC website. The app automatically enters the provided
            PNR number, attempts to detect and solve the captcha using OCR-based
            techniques, and upon success, retrieves and displays the PNR data in
            a user-friendly format.
          </p>
          <p className="card-text">
            <strong>Note:</strong> This app is developed{" "}
            <strong>purely for educational purposes</strong> to demonstrate how
            captchas like <em>G-Captcha</em>, <em>Cloudflare captchas</em>,
            etc., can be approached using modern OCR technologies. It is not
            intended for commercial use or to violate any terms of service.
          </p>
          <p className="text-muted">
            By using this app, you agree that you're using it responsibly and
            solely for learning and experimentation.
          </p>
        </div>
      </div>
    </div>
  );
}
