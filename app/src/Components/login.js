import logo from './logo.svg';
// import './App.css';
// import Routes from "App";
import React, { Component, Route } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import { Snackbar, IconButton, Button } from '@material-ui/core';
import { Form, Col, Row, Container } from 'react-bootstrap';


class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            open: false,
            loading: false,
            accountInfo: {}
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
        // console.log(this.props.history);
        // let history = useHistory();
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
            .then((responseText) => {
                try {
                    var responseJson = JSON.parse(responseText);
                    console.log(responseJson);
                    localStorage.setItem('accountInfo', JSON.stringify(responseJson));
                    this.setState({ accountInfo: responseJson });
                    this.props.history.push('/Mainpage');
                } catch (e) {
                    console.log(e);
                    //     this.setState({ open: true });
                    //     return (<Snackbar
                    //         open={this.state.open}
                    //         autoHideDuration={6000}
                    //         onClose={this.handleClose}
                    //         message="Invalid username or password"
                    //         action={
                    //             <React.Fragment>
                    //                 <Button color="secondary" size="small" onClick={this.handleClose}>
                    //                     UNDO
                    //   </Button>
                    //                 <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>

                    //                 </IconButton>
                    //             </React.Fragment>
                    //         } />);
                }
            })
            .catch((error) => {
                console.error(error);

            });
    };


    render() {

        return (
            
            <Container>
                <Form onSubmit={this.handleSubmit}>
 <Form.Group as={Row} controlId="formHorizontalEmail">
   <Form.Label column sm={2}>
     Username
   </Form.Label>
   <Col sm={10}>
     <Form.Control type="text" placeholder="Enter Username Here" onChange={this.handleChange("username")} />
   </Col>
 </Form.Group>
 
 <Form.Group as={Row} controlId="formHorizontalPassword">
   <Form.Label column sm={2}>
     Password
   </Form.Label>
   <Col sm={10}>
     <Form.Control type="password" placeholder="Enter Password Here" onChange={this.handleChange("password")} />
   </Col>
 </Form.Group>
 <Form.Group as={Row} controlId="formHorizontalCheck">
   <Col sm={{ span: 10, offset: 2 }}>
     <Form.Check label="Remember me" />
   </Col>
 </Form.Group>
 
 <Form.Group as={Row}>
   <Col sm={{ span: 10, offset: 2 }}>
     <Button type="submit">Sign in</Button>
   </Col>
 </Form.Group>
</Form>
            </Container>
        );
    }
}


export default login;
