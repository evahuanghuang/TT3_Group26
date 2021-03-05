import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Snackbar } from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      open: false,
      loading: false  
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': '4EJDDbJ33d3aZNn8s1xKE4MW5nGpRowL2el5LHkS'
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password
        })
      })
        .then((response) => response.text())
        .then((responseText) =>{
          try {
            var responseJson = JSON.parse(responseText);
            console.log(responseJson);
            localStorage.setItem('accountKey', responseJson["accountKey"]);
          } catch (e) {
            // this.setState({ open: true});
            // return (<Snackbar
            //   open={this.state.open}
            //   autoHideDuration={6000}
            //   onClose={this.handleClose}
            //   message="Invalid username or password"
            //   action={
            //     <React.Fragment>
            //       <Button color="secondary" size="small" onClick={this.handleClose}>
            //         UNDO
            //       </Button>
            //       <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            //         <CloseIcon fontSize="small" />
            //       </IconButton>
            //     </React.Fragment>
            //   } />);
              }
        })
        .catch((error) => {
          console.error(error);
        });
  };
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="text">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.handleChange("username")}
              title="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange("password")}
              title="password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}


export default App;
