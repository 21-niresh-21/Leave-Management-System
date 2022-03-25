import React from "react";
import ApplyLeaveForm from "../components/applyLeave/ApplyLeaveForm";
import BalanceSheet from "../components/applyLeave/BalanceSheet";
import UpcomingHolidays from "../components/applyLeave/UpcomingHolidays";
import "../pages/pages.css";

function ApplyLeave() {
  return (
    <div className="root-div">
      <div className="top-div-container">
        <div className="top-left-div">
          <ApplyLeaveForm />
        </div>
        <div className="top-right-div">
          <BalanceSheet />
        </div>
      </div>

      <div className="bottom-div-container">
        <UpcomingHolidays />
      </div>
    </div>
  );
}

export default ApplyLeave;
