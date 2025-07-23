import { useEffect, useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

export default function ViewDetails() {
  const { studentid } = useParams();
 const [studentData, setStudentData] = useState(null); // define state
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [Phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false); // Tracks if form has been submitted
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentid)
      .then((res) => res.json())
      .then((data) => console.log(data)) 
      .catch((err) => console.log(err.message));
  }, [studentid]);

  return (
    <div className="container">
      <h2>Student Details</h2>

      {studentData && (
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
      )}

      <Link to="/" className="btn btn-danger">
        Back
      </Link>
    </div>
  );
}
