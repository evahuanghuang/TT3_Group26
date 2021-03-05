import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import logo from '../logo.svg';
const Viewinfo = (props) => {
    const [toggleCred, setToggleCred] = useState(true);
    return(
        <React.Fragment>
            <div style={{display:'flex'}}>
                <img src={logo} style={{maxHeight:'100px',maxWidth:'100px'}}></img>
                <div>
                <div style={{display:'flex'}}> <img src={logo} style={{maxHeight:'50px',maxWidth:'50px'}}></img><b>NRIC</b></div> 
                <div>Address</div> 
                <div>Phone</div> 
                <div>Email</div>
                </div>
            </div>
            <Button onClick={()=>{setToggleCred(!toggleCred)}}>
                click me
            </Button>
            {/* <blockquote class="blockquote text-left">
                <h3><strong>First name <mark>highlight last name</mark></strong></h3>
                <small class="text-muted">Account Key</small> 
            </blockquote> */}
            {toggleCred && <div> CREDITIONS</div>}
        </React.Fragment>
        )
};

export default Viewinfo;