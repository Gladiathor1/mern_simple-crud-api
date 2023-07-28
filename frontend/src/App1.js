// import logo from './logo.svg';
import './App.css';
// import{ BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TutorialsList from "./components/urls-list.component";
import AddTutorial from "./components/add-url.component";
import { Router, Routes, Route, Link } from "react-router-dom";
import { styles } from "./css-common"
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  // const { classes } = this.props
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    // <Router>
    //   <Routes>
    //   <Route path='/' exact component={UrlList}/>
    //   </Routes>
    // </Router>
    // </div>
    // <div>
    //             <p>Hello World</p>
    //         </div>

    <div>
        {/* <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              JBapp
            </Typography>
            <Link to={"/urls"} className={classes.link}>
              <Typography variant="body2">
                Urls
              </Typography>
            </Link>
            <Link to={"/add"} className={classes.link}>
              <Typography variant="body2">
                Add
            </Typography>
            </Link>
          </Toolbar>
        </AppBar> */}

{/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="standard-basic" label="Enter url" variant="standard" /> */}
    {/* </Box> */}


        {/* <Router> */}
          <Routes>
            {/* <Route path="/" element={<TutorialsList/>} exact /> */}
            {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
            {/* <Route path="/" element={<AddTutorial/>} exact /> */}
            {/* <Route exact path="/add" component={AddTutorial} /> */}
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */} 
          </Routes>
          {/* </Router> */}
    </div>

  );
}

// export default App;
export default withStyles(styles)(App);
