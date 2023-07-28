import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
const { _id, urlName} = props.obj;
console.log("yo"+props.obj)

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:5000/urls/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{urlName}</td>
	{/* <td>{email}</td>
	<td>{rollno}</td> */}
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
