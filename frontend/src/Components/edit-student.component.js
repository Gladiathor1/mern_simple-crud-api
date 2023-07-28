// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

// EditStudent Component
// const EditStudent = (props) => {
// 	console.log(props.obj)
// const [formValues, setFormValues] = useState({
// 	urlName: "",
// 	// email: "",
// 	// rollno: "",
// });

const EditStudent = (props) => {
	console.log(props.obj)
const [formValues, setFormValues] = useState({
	urlName: "",
	// email: "",
	// rollno: "",
});
	
// const queryParams = new URLSearchParams(window.location.search);
// const id = queryParams.get('id');
// // const name = queryParams.get('name');
// // const type = queryParams.get('type');
// alert(id); // 55 test null

//onSubmit handler
const onSubmit = (studentObject) => {
	// console.log(formValues)
	// console.log(setFormValues)
	
	axios
	.post(
		"http://localhost:5000/urls/update/" +
		"626b9bf10590eb841c43d5c8",
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Url successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert(err));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:5000/urls/" +"626b9bf10590eb841c43d5c8"
		// + props.match.params.id
	)
	.then((res) => {
		const { urlName } = res.data;
		setFormValues({ urlName });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Url
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
