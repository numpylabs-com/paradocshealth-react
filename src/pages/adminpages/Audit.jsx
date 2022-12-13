import React from 'react'
import Navbar from '../../components/clinic-admin/Navbar'
import Search from '../../components/clinic-admin/Search'
import TableItems from '../../components/clinic-admin/TableItems'
import { DoctorReport,ClinicReport } from '../../config/data'

const Audit = () => {
  const header = ["ID#", "Name", "Report"];
  return (
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="doctor">
          <div className='audit-card'>
            <div className='input'>
              <h1>Clinics</h1>
              <Search/>
            </div>
            <TableItems header={header} rowData={ClinicReport}/>
          </div>
          <div className='audit-card'>
            <div className='input'>
                <h1>Doctors</h1>
                <Search/>
              </div>
              <TableItems header={header} rowData={DoctorReport}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Audit