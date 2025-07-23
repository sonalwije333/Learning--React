import { Link } from "react-router-dom";

export default function EditStudent(){
      const { studentid } = useParams();
 // const [studentData, setStudentData] = useState(null); // define state

  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentid)
      .then((res) => res.json())
      .then((data) => setStudentData(data)) // store data in state
      .catch((err) => console.log(err.message));
  }, [studentid]);
    const handleSubmit=()=>{

    }
    return (
        <div className="container">
               <div className="form-box">
      <h2>Edit Student Details</h2>
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
             
        </div>
    )
}