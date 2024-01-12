import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentCard.css'; // Import your custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://localhost:7269/api/grade')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const firstThreeData = users.slice(0, 3);

  return (
    <div className="container mt-4">

<div className="row">
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        firstThreeData.map((user, index) => (
          <div key={user.sid} className="col-lg-4 col-md-6 mb-4">
            <div className="card text-center shadow p-3 mb-5 bg-muted rounded scale-on-hover">
              <img
                src={
                  index === 0
                    ? 'https://img.freepik.com/premium-vector/gold-medal-illustration_9845-433.jpg'
                    : index === 1
                    ? 'https://www.shutterstock.com/image-vector/champion-silver-medal-red-ribbon-260nw-1710981616.jpg'
                    : 'https://www.shutterstock.com/image-vector/bronze-3st-place-medal-vector-260nw-664659649.jpg'
                }
                alt="Profile"
                className="card-img-top mx-auto"
                style={{ width: '250px', height: '200px', objectFit: 'cover' }}
              />

              <div className="card-body text-white" style={{ background: 'rgba(10, 10, 60, 10)', borderRadius: '15px', fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>
                <p className="card-title mb-3" style={{ fontSize: '24px' }}>Name: {user.sname}</p>
                <p className="card-text mb-3" style={{ marginBottom: '10px', fontSize: '18px' }}>Id: {user.sid}</p>
                <p className="card-text mb-3" style={{ marginBottom: '10px', fontSize: '18px' }}>Course: {user.course}</p>
                <p className="card-text mb-3" style={{ marginBottom: '10px', fontSize: '18px' }}>Percentage: {user.marksPercentage}%</p>
                <p className="card-text mb-3" style={{ marginBottom: '10px', fontSize: '18px' }}>Badge: {user.badge}</p>
                <button className="btn btn-outline-light" style={{ fontSize: '16px' }}>See Details</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>

    <table className="table table-hover mt-4" style={{ borderSpacing: '10px', fontSize: '18px' }}>
  <thead className="thead-dark bg-primary">
    <tr>
      <th>Student Id</th>
      <th>Student Name</th>
      <th>Course</th>
      <th>Unit Test</th>
      <th>Mid Test</th>
      <th>Final Test</th>
      <th>Total Marks</th>
      <th>Marks Percentage</th>
      <th>Total Days</th>
      <th>Present Days</th>
      <th>Attendance Percentage</th>
      <th>Badge</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, index) => (
      <tr
        key={user.sid}
        className={`table-row ${index % 2 === 0 ? 'table-light' : 'table-white'}`}
        style={{ marginBottom: '10px' }}
      >
        <td style={{ padding: '10px' }}>{user.sid}</td>
        <td style={{ padding: '10px' }}>{user.sname}</td>
        <td style={{ padding: '10px' }}>{user.course}</td>
        <td style={{ padding: '10px' }}>{user.unitTest}</td>
        <td style={{ padding: '10px' }}>{user.midTest}</td>
        <td style={{ padding: '10px' }}>{user.finalTest}</td>
        <td style={{ padding: '10px' }}>{user.totalMarks}</td>
        <td style={{ padding: '10px', color: user.marksPercentage > 45 ? 'green' : 'red' }}>
         <b> {user.marksPercentage}%</b>
        </td>
        <td style={{ padding: '10px' }}>{user.totalDays}</td>
        <td style={{ padding: '10px' }}>{user.presentDays}</td>
        <td style={{ padding: '10px' }}>
          <div className="progress" style={{ height: '15px' }}>
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
            > {100-user.attendancePercentage}% </div>
          </div>
        </td>
        <td style={{ padding: '10px' }}>{user.badge}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default StudentCard;