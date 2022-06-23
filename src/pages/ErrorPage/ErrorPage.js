import React from "react";
import "./errorPage.css";
import mogo from "../../Assets/Logotipo.png";

function ErrorPage() {
  return (
    <div>
      <div className="error-page">
        <div>
          <img src={mogo} className="img-404" alt="4445" />
        </div>
        <div className="box">
          <h2>
            4<span className="zero"></span>4
          </h2>
        </div>

        <div className="h3">
          <h3 >the page you are looking for not avaible!</h3>
        </div>

        <div className="button">
          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
