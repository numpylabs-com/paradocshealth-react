import React from 'react'
import { useLocation } from 'react-router-dom'
import {motion} from "framer-motion"

const varientsContainer = {
  slideout:{
    x:300,
    opacity:0
  },
  slidein:{
    x:0,
    opacity:1,
    transition:{type: "spring", stiffness: 60,duration:0.5}
  }
}
const TableItems = ({header,rowData}) => {
  const location = useLocation()

  const boxHandler = (e) => {

  }
  return (
    <div className="doctors-list">
            <table>
              <thead>
                <tr>
                  <th className="checkbox-rect">
                      <input type="checkbox" id="checkbox-rect-all" name="allcheck" onChange={boxHandler}/>
                      <label htmlFor="checkbox-rect-all"><span></span></label>
                  </th>
                  {header.map((data,index)=>(
                    <th key={index}>{data}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* {location.pathname =="/doctor" && rowData.map((data,index)=>(
                <motion.tr variants={varientsContainer} initial="slideout" animate="slidein" key={index}>
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
                </motion.tr>
                ))}

                {location.pathname =="/patient" && rowData.map((data,index)=>(
                <motion.tr variants={varientsContainer} initial="slideout" animate="slidein" key={index}>
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
                </motion.tr>
                ))} */}
                
                {rowData.map((data,index)=>(
                <motion.tr variants={varientsContainer} initial="slideout" animate="slidein" key={index}>
                  <td className="checkbox-rect">
                      <input type="checkbox" id={`checkbox-rect${index}`} name="check" onChange={boxHandler}/>
                      <label htmlFor={`checkbox-rect${index}`}><span></span></label>
                  </td>
                  {Object.values(data).map((value) => (<td>{value}</td>))}
                  {(location.pathname=="/doctor" || location.pathname=="/patient") &&
                  <td><i className="fa-solid fa-pen"></i></td>}
                  {(location.pathname=="/doctor" || location.pathname=="/patient" || location.pathname=="/admin/clinics") &&
                  <td><i className="fa-solid fa-trash-can"></i></td>}
                </motion.tr>
                ))}
                
              </tbody>
            </table>
          </div>
  )
}

export default TableItems