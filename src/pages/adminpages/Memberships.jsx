import React from 'react'
import Navbar from '../../components/clinic-admin/Navbar'
import Search from '../../components/clinic-admin/Search'
import TableItems from '../../components/clinic-admin/TableItems'
import { MembersData } from '../../config/data'

const Memberships = () => {
  const header = ["ID#", "Name", "Date", "Amount", "Due Date","Status"];
  return (
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="doctor">
        <div className='input'>
            <Search/>
          </div>
          <TableItems header={header} rowData={MembersData}/>
        </div>
      </div>
    </div>
  )
}

export default Memberships