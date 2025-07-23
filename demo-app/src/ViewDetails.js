import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDetails() {
  const { studentid } = useParams();
  const [studentData, setStudentData] = useState(null); // define state

  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentid)
      .then((res) => res.json())
      .then((data) => setStudentData(data)) // ✅ set the state
      .catch((err) => console.log(err.message));
  }, [studentid]);

  return (
    <div className="container">
      <h2>Student Details</h2>

      {studentData ? (
        <div className="details">
          <p>
            <strong>ID: </strong>
            {studentData.id}
          </p>
          <p>
            <strong>Name: </strong>
            {studentData.name}
          </p>
          <p>
            <strong>Place: </strong>
            {studentData.place}
          </p>
          <p>
            <strong>Phone: </strong>
            {studentData.phone}
          </p>
        </div>
      ) : (
        <p>Loading student details...</p>
      )}

      <Link to="/" className="btn btn-danger">
        Back
      </Link>
    </div>
  );
}
