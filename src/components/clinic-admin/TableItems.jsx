import React from 'react'
import { useLocation } from 'react-router-dom'

const TableItems = ({header,rowData}) => {
  const location = useLocation()
  return (
    <div className="doctors-list">
            <table>
              <thead>
                <tr>
                  <th className="checkbox-rect">
                      <input type="checkbox" id="checkbox-rect1" name="check"/>
                      <label htmlFor="checkbox-rect1"><span></span></label>
                  </th>
                  {header.map((data,index)=>(
                    <th key={index}>{data}</th>
                  ))}
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {location.pathname =="/doctor" && rowData.map((data,index)=>(
                <tr key={index}>
                  <td className="checkbox-rect">
                      <input type="checkbox" id="checkbox-rect1" name="check"/>
                      <label htmlFor="checkbox-rect1"><span></span></label>
                  </td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.specs}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td><i className="fa-solid fa-pen"></i></td>
                  <td><i className="fa-solid fa-trash-can"></i></td>
                </tr>
                ))}

                {location.pathname =="/patient" && rowData.map((data,index)=>(
                <tr key={index}>
                  <td className="checkbox-rect">
                      <input type="checkbox" id="checkbox-rect1" name="check"/>
                      <label htmlFor="checkbox-rect1"><span></span></label>
                  </td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.disease}</td>
                  <td>{data.doctor}</td>
                  <td>{data.contact}</td>
                  <td><i className="fa-solid fa-pen"></i></td>
                  <td><i className="fa-solid fa-trash-can"></i></td>
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
  )
}

export default TableItems