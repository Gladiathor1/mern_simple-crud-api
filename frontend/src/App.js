// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";

// App Component
const App = () => {
return (
	// <Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				React MERN Stack App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create url
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Url List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
                    <Route path="/" element={<CreateStudent />}></Route>
                    <Route path="/create-student" element={<CreateStudent />}></Route>
                    <Route path="/edit-student/:id" element={<EditStudent />}></Route>
                    <Route path="/student-list" element={<StudentList />}></Route>

                    {/* <Route exact path="/"
                        component={CreateStudent} />
                    <Route path="/create-student"
                        component={CreateStudent} />
                    <Route path="/edit-student/:id"
                        component={EditStudent} />
                    <Route path="/student-list"
                        component={StudentList} /> */}
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	
    );
};

export default App;
