// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ urlName: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:5000/urls/add',
	studentObject)
	.then(res => {
		if (res.status === 200)
		alert('Url successfully added')
		else
		Promise.reject()
	})
	.catch(err => alert('Url already exists'))
}
	
// Return student form
return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Enter Url
	</StudentForm>
)
}

// Export CreateStudent Component
export default CreateStudent
