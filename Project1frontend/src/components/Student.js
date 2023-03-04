import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import StudentData from "./StudentData";

function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
        alert("Student added successfully!")
    });
  };

  const navigate=useNavigate();

  return (
    <>
      <div className="container col-5 mt-4 p-5 border border-info">
        <h3 style={{ color: "green", marginBottom: "30px" }}>Add Student</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 pb-3" controlId="formBasicAddress">
            <Form.Label>Student Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
      <Button variant="info" type="submit" className="my-5" onClick={()=>navigate("/studentDetails")}>
            View Student Details
      </Button>
    </>
  );
}

export default Student;
