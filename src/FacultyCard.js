import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyCard = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://localhost:7269/api/grade')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter the user data based on the matched sid
    const matchedUsers = users.filter(user => user.course === selectedCourse);
    setFilteredUsers(matchedUsers);
    console.log(filteredUsers);
  }, [users, selectedCourse]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://localhost:7269/api/grade/course')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    // Filter the user data based on the matched sid
    const matchedCourse = courses.filter(user => user.createdBy === sessionStorage.getItem('Fname'));
    setFilteredCourses(matchedCourse);
  }, [courses, sessionStorage.getItem('Fname')]);

  return (
    <div className='container-fluid ' style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/graduating-time-covid-19-background_53876-104067.jpg?w=1380&t=st=1705053222~exp=1705053822~hmac=b771b2f475a7e1f36012f98834cb20d86204909fc3c0e08e5c6e0d7a65079778")', backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat:'no-repeat', minHeight: '100vh' }}>

      {filteredCourses.length > 0 ? (
        <div>
          <div className='row '>
          <div className='col-12 col-md-2 mb-3 m-5 p-3 bg-danger border border-dark rounded'>
              <h4 className='text-white' style={{ textDecoration: 'underline' }}><b>Faculty Name</b></h4>
              <div><h4 className='text-warning'>{sessionStorage.getItem('Fname')}</h4></div>
            </div>

            <div className='col-12 col-md-6 mb-3 m-5'>
              <label htmlFor="courseDropdown" className="form-label "><b>Select Course:</b></label>
              <select id="courseDropdown" className="form-select" onChange={handleDropdownChange} value={selectedCourse}>
                <option value=""> Courses</option>
                {filteredCourses.map((course, index) => (
                  <option key={index} value={course.courseName}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='table-responsive container bg-info rounded'>
            <table className="table table-hover mt-4 ">
            <thead className="thead bg-info" >
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
                {filteredUsers.map((user, index) => (
                  <tr key={user.sid} className={index % 2 === 0 ? 'table-light' : ''}>
                    <td>{user.sid}</td>
        <td>{user.sname}</td>
        <td>{user.course}</td>
        <td>{user.unitTest}</td>
        <td>{user.midTest}</td>
        <td>{user.finalTest}</td>
        <td>{user.totalMarks}</td>
        <td style={{ color: user.marksPercentage > 45 ? 'green' : 'red' }}><b>{user.marksPercentage}%</b></td>
        <td>{user.totalDays}</td>
        <td>{user.presentDays}</td>
        <td>
          <div className="progress" style={{ height: '15px' }}>
            <div
              className={`progress-bar ${user.attendancePercentage > 50 ? 'bg-success' : 'bg-danger'}`}
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
            > {100 - user.attendancePercentage}% </div>
          </div>
        </td>
        <td>{user.badge}</td>
      </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No matching user found.</p>
      )}
    </div>
  );
};

export default FacultyCard;
