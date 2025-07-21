import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form-box">
      <h2>Add New Student</h2>
      <form>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
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
