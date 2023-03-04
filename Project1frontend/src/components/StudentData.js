import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function StudentData() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  
  const navigate =useNavigate();

  return (
    <>
    <div className="container col-8 mt-4 p-5 border border-info">
        <h3 style={{ color: "blue", marginBottom: "50px" }}><u>Student Data</u></h3>
        <table className="table table-striped">
          <thead className="thead-dark">
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
          </tr>
          </thead>
          <tbody>
        {students.map((student) => (
          <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.address}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
      <Button variant="success" type="submit" className="my-5" onClick={()=>navigate("/")}>
            Go Back
      </Button>
      </>
  )
}
