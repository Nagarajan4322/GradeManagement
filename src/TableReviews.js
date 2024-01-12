import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TablieReviews() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://localhost:7269/api/grade')
      .then(response => 
        setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="bg-primary text-white">Student Id</th>
          <th scope="col" className="bg-primary text-white">Student Name</th>
          <th scope="col" className="bg-primary text-white">Course</th>
          <th scope="col" className="bg-primary text-white">Unit Test</th>
          <th scope="col" className="bg-primary text-white">Mid Test</th>
          <th scope="col" className="bg-primary text-white">Final Test</th>
          <th scope="col" className="bg-primary text-white">Total Marks</th>
          <th scope="col" className="bg-primary text-white">Marks Percentage</th>
          <th scope="col" className="bg-primary text-white">Total Days</th>
          <th scope="col" className="bg-primary text-white">Present Days</th>
          <th scope="col" className="bg-primary text-white">Attendance Percentage</th>
          <th scope="col" className="bg-primary text-white">Badge</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.sid} className={index % 2 === 0 ? 'table-primary' : 'table-secondary'}>
            <td>{user.sid}</td>
            <td>{user.sname}</td>
            <td>{user.course}</td>
            <td>{user.unitTest}</td>
            <td>{user.midTest}</td>
            <td>{user.finalTest}</td>
            <td>{user.totalMarks}</td>
            <td>{user.marksPercentage}</td>
            <td>{user.totalDays}</td>
            <td>{user.presentDays}</td>
            <td>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${user.attendancePercentage > 50 ? 'success' : 'danger'}`}
                    role="progressbar"
                    style={{ width: `${user.attendancePercentage}%` }}
                    aria-valuenow={user.attendancePercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {user.attendancePercentage}%
                  </div>
                  <div
                    className={`progress-bar bg-danger`}
                    role="progressbar"
                    style={{ width: `${100 - user.attendancePercentage}%` }}
                    aria-valuenow={100 - user.attendancePercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </td>
            <td>{user.badge}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default TablieReviews;