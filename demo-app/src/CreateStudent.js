import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // To redirect after saving

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Student added successfully!");
          navigate("/"); // Redirect to home
        } else {
          throw new Error("Failed to add student");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="form-box">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div>
          <button type="submit" className="btn btn-add">
            Save
          </button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
