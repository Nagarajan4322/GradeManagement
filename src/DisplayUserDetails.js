import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve data from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem('userData');
    console.log(userData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
       
      <h1>User Data from Session Storage</h1>
      {userData ? (
        <div>
          <p><strong>Student Id:</strong> {userData.sid}</p>
          <p><strong>Student Name:</strong> {userData.sname}</p>
      
        </div>
      ) : (
        <p>No user data found in sessionStorage.</p>
      )}
    </div>
  );
};

export default DisplayUserData;
