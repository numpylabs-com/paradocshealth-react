import React from "react";
import Navbar from "../../components/clinic-admin/Navbar";
import SearchButton from "../../components/clinic-admin/SearchButton";
import TableItems from "../../components/clinic-admin/TableItems";
import {PatientData} from "../../config/data"

const Patient = () => {
  const header = ["ID#", "Name", "Disease", "Doctor", "Contact"];
  return (
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="doctor">
          <SearchButton />
          <TableItems header={header} rowData={PatientData}/>
        </div>
      </div>
    </div>
  );
};

export default Patient;
