import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentTable() {
  //  Initialize students as an empty array
  const [students, setStudents] = useState([]);

  // Fetch data from backend when component mounts
  useEffect(() => {
    fetch('http://localhost:8000/students') // API endpoint
      .then((res) => res.json())            // Parse JSON
      .then((data) => {
        setStudents(data);                 //  Store data in state
      })
      .catch((err) => console.log(err.message)); // Handle fetch error
  }, []); // Empty dependency array = run once on mount

  return (
    <div className="container">
      <h2>Student Records</h2>

      <div className="table-container">
        {/* ✅ Navigation link to add a new student */}
        <Link to="/student/create" className="btn btn-add">
          Add new Student
        </Link>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/*  Map over students if data is available */}
            {students && students.length > 0 ? (
              students.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a href="#" className="btn btn-info">View</a>
                    <a href="#" className="btn btn-primary">Edit</a>
                    <a href="#" className="btn btn-danger">Delete</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No student records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
