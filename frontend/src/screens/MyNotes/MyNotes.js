import React from "react";
import "./notes.css";

function UserTable() {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>1990-05-15</td>
            <td>123-456-7890</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>1985-09-20</td>
            <td>987-654-3210</td>
          </tr>
          <tr>
            <td>sakshi korde</td>
            <td>sbkorde@gmail.com</td>
            <td>30/12/2001</td>
            <td>3456678932</td>
          </tr>
          <tr>
            <td>krupa desai</td>
            <td>krupadesai1622@gmail.com</td>
            <td>16/05/2002</td>
            <td>0987654312</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
