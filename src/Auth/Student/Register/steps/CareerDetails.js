import React from "react";

export default function CareerDetails({ prevStep, nextStep }) {
  return (
    <div>
      <div className="registration-container">
        <h2 className="lhead">Enter Your Career Details</h2>
        <hr />
        <br />
        <div className="btnpostion">
          <button
            type="button"
            className="btn btn-primary prv-step"
            onClick={prevStep}
          >
            &lt; Prev
          </button>
          <button
            type="button"
            className="btn btn-primary next-step"
            onClick={nextStep}
          >
            next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
