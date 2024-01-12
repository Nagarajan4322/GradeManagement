import React, { useEffect, useState } from 'react';

const FetchCourse = () => {
  // State to hold the retrieved data
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // Fetch the data from session storage
    const storedData = sessionStorage.getItem('facultyCourseDetails');

    // Parse the data (assuming it's stored as a JSON string)
    const parsedData = JSON.parse(storedData) || [];

    // Update the state with the retrieved data
    setDataList(parsedData);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  // ... rest of your component logic

  return (
    <div>
      {/* Render your component using the retrieved dataList */}
      {dataList.map((item, index) => (
        <div key={index}>{item.facultyCourseList}</div>
       
      ))}
      <h1>hi</h1>
      <h1>{dataList}</h1>
    </div>
  );
};

export default FetchCourse;
