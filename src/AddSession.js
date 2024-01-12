import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Addsession = () => {
  const [userData, setUserData] = useState({
    sid: '',
    sname: ''
    
  });

  const data = {
   data:sessionStorage.getItem('sid')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log('Data stored in sessionStorage:', userData);
  };

  return (
    <div>
     
       <Link to={{ pathname: 'Display', state: { data } }}>Go to Destination</Link>
      <Link to="path">Regi</Link>
      <Link to="Display">Display</Link>
      <h1>Store Data in Session Storage</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sid">Student Id:</label>
          <input
            type="text"
            className="form-control"
            id="sid"
            name="sid"
            value={userData.sid}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sname">Student Name:</label>
          <input
            type="text"
            className="form-control"
            id="sname"
            name="sname"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <h1>sessionStorage.getItem</h1>
      </form>
    </div>
  );
};

export default Addsession;
