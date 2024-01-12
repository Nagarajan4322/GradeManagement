import React, { useState, useEffect } from 'react';

const FacultyLogin = () => {
  // State to manage the input values
  const [facultyId, setFacultyId] = useState('');
  const [courseName, setCourseName] = useState('');

  // State to manage the list of stored courses
  const [courseList, setCourseList] = useState([]);

  // Effect to load stored data on component mount
  useEffect(() => {
    const storedCourseList = JSON.parse(sessionStorage.getItem('facultyCourseList')) || [];
    setCourseList(storedCourseList);
  }, []);

  // Function to add course to session storage
 // Function to add course to session storage
const addCourse = () => {
   
    // Retrieve existing data from sessionStorage
    let existingCourseList = JSON.parse(sessionStorage.getItem('facultyCourseList')) || [];
    sessionStorage.removeItem('facultyCourseList');
    // Remove previous data from session storage

  
    // Find the index of the faculty ID in the existing data
    const facultyIndex = existingCourseList.findIndex(course => course.facultyId === facultyId);
  
    if (facultyIndex !== -1) {
      // If faculty ID already exists, add the new course to the existing courses array
      existingCourseList[facultyIndex].courses.push(courseName);
    } else {
      // If faculty ID doesn't exist, create a new entry with the faculty ID and an array containing the new course
      const newFacultyEntry = { facultyId, courses: [courseName] };
      existingCourseList.push(newFacultyEntry);
    }
  
    // Update sessionStorage with the updated data
    sessionStorage.setItem('facultyCourseList', JSON.stringify(existingCourseList));
  
    // Clear the input fields
    setCourseName('');
  
    // Update the state to trigger a re-render with the updated course list
    setCourseList(existingCourseList);
  };
  
  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic for submitting the form goes here
    // This is just an example, you might want to send the data to a server or perform other actions
    console.log('Form submitted:', { facultyId, courses: courseList.map(faculty => faculty.courses).flat() });
  };

  return (
    <div>
      <h2>Faculty Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="facultyId">Faculty ID:</label>
        <input
          type="text"
          id="facultyId"
          value={facultyId}
          onChange={(e) => setFacultyId(e.target.value)}
          required
        />

        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <button type="button" onClick={addCourse}>
          Add Course (Extra)
        </button>

        <button type="submit">
          Submit
        </button>
      </form>

      <h3>Stored Course List</h3>
      <ul>
        {courseList.map((faculty, index) => (
          <li key={index}>
            Faculty ID: {faculty.facultyId}, Courses: {faculty.courses ? faculty.courses.join(', ') : 'No courses'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyLogin;
