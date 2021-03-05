import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import personlogo from '../personlogo.png';
import personlogosmall from '../personlogosmall.png';
import accountkey from '../accountkey.png';

const Viewinfo = (props) => {
    const [toggleCred, setToggleCred] = useState(false);
    return(
        <React.Fragment>
            <div style={{display:'flex'}}>
                <img src={personlogo} style={{maxHeight:'100px',maxWidth:'100px'}}></img>
                <div>
                <div style={{display:'flex'}}> <img src={personlogosmall} style={{maxHeight:'50px',maxWidth:'50px'}}></img><b>{props.accountInfo.firstName} {props.accountInfo.lastName}</b></div> 
                <div style={{display:'flex'}}> <img src={accountkey} style={{maxHeight:'50px',maxWidth:'50px'}}></img>{props.accountInfo.accountKey}</div> 
                </div>
            </div>
            <Button onClick={()=>{setToggleCred(!toggleCred)}}>
                Detailed information
            </Button>
            {toggleCred && <div> 
                <div><b>NRIC:</b>            {props.accountInfo.nric}</div> 
                <div><b>Address:</b>         {props.accountInfo.address}</div> 
                <div><b>Phone Number:</b>    {props.accountInfo.phoneNumber}</div> 
                <div><b>Email: </b>          {props.accountInfo.email}</div>
</div>}
        </React.Fragment>
        )
};

export default Viewinfo;