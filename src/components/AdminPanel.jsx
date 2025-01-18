import React from 'react'
import "./AdminPanel.css"
const AdminPanel = ({filteredData}) => {
    console.log(filteredData)
  return (
    <div>
        <h1>ADMIN PANEL</h1>
        <button className='add'>ADD USER</button>
        <table>
            <thead>
                <th>S.no</th>
                <th className='user'>User Name</th>
            </thead>
            <tbody>
            {filteredData.map((person,idx)=>(
                <tr>
                <td>{person.id}</td>
                <td>{person.firstName} {person.lastName}</td>
                <td ><button className='updatebtn'>UPDATE</button></td>
                <td><button className='deletebtn'>DELETE</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default AdminPanel