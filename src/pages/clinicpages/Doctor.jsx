import React from "react";
import Navbar from "../../components/clinic-admin/Navbar";
import SearchButton from "../../components/clinic-admin/SearchButton";
import TableItems from "../../components/clinic-admin/TableItems";
import {DoctorData} from "../../config/data"

const Doctor = () => {
  const header = ["ID#","Name","Specialization","Email","Contact","",""];
  return (
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="doctor">
          <SearchButton/>
          <TableItems header={header} rowData={DoctorData}/>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
