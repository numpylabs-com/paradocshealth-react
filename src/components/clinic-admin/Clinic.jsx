import React, { useContext, useState  } from "react";

const Clinic = () => {

  return (
    <div className="dashboard">  
      <div className="patients-detail">
        <table>
          <thead>
            <tr>
              <th>Patients</th>
              <th>Date of Birth</th>
              <th>Contact</th>
              <th>Review Date</th>
              <th>Status</th>
              <th>Go to Form</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
)};

export default Clinic;
