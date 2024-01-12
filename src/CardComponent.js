import React, { useState, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { SiStudyverse } from "react-icons/si";

const CardComponent = () => {
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
    const matchedUsers = users.filter(user => user.sid == sessionStorage.getItem('sid'));
    setFilteredUsers(matchedUsers);
  }, [users, sessionStorage.getItem('sid')]);

  const handleDownload = () => {
    const content = document.getElementById('pdf-content');

    html2canvas(content, { scale: 1 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('report-card.pdf');
    });
  };

  return (
    <div className='container m-5  '>
      {filteredUsers.length > 0 ? (
      <div id="pdf-content" >
          {filteredUsers.map((filteredUser, index) => (
            <div key={index} className="card p-4 mb-4 border border-dark " style={{ width: '80%', backgroundColor: '#faf9eb', height: '80%', margin: 'auto'  }} >
              <div className="card-header bg-light shadow-lg border border-dark" >
                <div className='row align-items-center'>
                  <div className='col-md-2 col-sm-12 text-center mb-3'>
                    <SiStudyverse style={{ fontSize: '70px', color: '#050875' }} />
                  </div>
                  <div className="col-md-10 col-sm-12">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#050875' }}>
                      Wisdom Education Institute & Training Center
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className='row m-3'>
                  <h3 style={{ fontWeight: 'bold', fontSize: '2rem', color: '#705611', textDecoration: 'underline' }}>Student Report Card</h3>
                </div>
                <hr />
                <div className="row">
                <div className="col-md-6">
                <div style={{ textAlign: 'left', marginLeft:'10%' }}>
                <h5 className="card-title border border-dark bg-white p-3 mb-0" style={{ 
  fontWeight: 'bold', 
  color: '#050875', 
  fontStyle: 'italic', 
 
}}>
 <b> Student Name  : </b> {filteredUser.sname}
</h5>
<h5 className="card-title border border-dark bg-white p-3" style={{ 
  fontWeight: 'bold', 
  color: '#050875', 
  fontStyle: 'italic', 
 
}}>
 <b> Student Id : </b> {filteredUser.sid}
</h5>
  </div>


                    <ul className="list-group m-5 rounded scale-on-hover">
                      <li className='list-group-item bg-primary text-white'><h4>Exam Results</h4></li>
                      <li className="list-group-item">Unit Test : {filteredUser.unitTest}</li>
                      <li className="list-group-item">Mid Test : {filteredUser.midTest}</li>
                      <li className="list-group-item">Final Test : {filteredUser.finalTest}</li>
                      <li className="list-group-item"><b>Total mark : {filteredUser.totalMarks}</b></li>
                    </ul>
                    <div className="col-md-6 bg-warning mx-auto mt-3 p-3 rounded scale-on-hover" style={{ borderRadius: '8px' }}>
                      <b style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Percentage : </b><br />{filteredUser.marksPercentage} %
                    </div>
                  </div>
                  <div className="col-md-6 ">
                   <div className='border border-dark bg-white p-4'>
                   <h5 className="card-title " style={{ 
  fontWeight: 'bold', 
  color: '#050875', 
  fontStyle: 'italic', 
 
}}><b>Course : </b></h5>
<h5 className="card-title" style={{ 
  fontWeight: 'bold', 
  color: '#050875', 
  fontStyle: 'italic', 
 
}}>{filteredUser.course}</h5>
                   </div>
                    {/* ... (rest of the card structure) ... */}
                    <ul className="list-group m-5 rounded scale-on-hover">
                      <li className='list-group-item bg-success text-white'><h4>Attendance Details</h4></li>
                      <li className="list-group-item text-dark">Total Days: {filteredUser.totalDays}</li>
                      <li className="list-group-item text-success">Present Days: {filteredUser.presentDays}</li>
                      <li className="list-group-item text-danger">Absent Days : {filteredUser.totalDays - filteredUser.presentDays}</li>
                      <li className="list-group-item">
                        <div className="progress" style={{ height: '25px', borderRadius: '8px', overflow: 'hidden' }}>
                          <div
                            className={`progress-bar ${filteredUser.attendancePercentage > 50 ? 'bg-success' : 'bg-danger'} progress-bar-striped`}
                            role="progressbar"
                            style={{ width: `${filteredUser.attendancePercentage}%` }}
                            aria-valuenow={filteredUser.attendancePercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >Attendance :
                            {filteredUser.attendancePercentage}%
                          </div>
                          <div
                            className={`progress-bar ${filteredUser.attendancePercentage > 50 ? 'bg-danger' : 'bg-success'} progress-bar-striped`}
                            role="progressbar"
                            style={{ width: `${100 - filteredUser.attendancePercentage}%` }}
                            aria-valuenow={100 - filteredUser.attendancePercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          > {100 - filteredUser.attendancePercentage}%
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="col-md-6 bg-warning mx-auto mt-3 p-3 rounded scale-on-hover" style={{ borderRadius: '8px' }}>
                      <b style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Badge :  </b><br />{filteredUser.badge}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted text-center">
                <p>Wisdom Institute Management</p>
                <small>Chennai-600027 {filteredUser ? filteredUser.lastUpdated : ''}</small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching user found.</p>
      )}
      <button className="btn btn-primary mt-3 mx-auto" onClick={handleDownload}>
        Download as PDF
      </button>
    </div>
  );
};

export default CardComponent;
