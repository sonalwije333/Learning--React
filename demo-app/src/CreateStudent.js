import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false); // Tracks if form has been submitted
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Enable validation messages

    // Check if all fields are filled
    if (!id || !name || !place || !phone) {
      return;
    }

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
          navigate("/");
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
        {submitted && id.length === 0 && (
          <span className="errorMsg">Please enter your ID</span>
        )}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {submitted && name.length === 0 && (
          <span className="errorMsg">Please enter your name</span>
        )}

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        {submitted && place.length === 0 && (
          <span className="errorMsg">Please enter your place</span>
        )}

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {submitted && phone.length === 0 && (
          <span className="errorMsg">Please enter your phone number</span>
        )}

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
