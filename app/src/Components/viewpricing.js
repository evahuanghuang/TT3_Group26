import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

class ViewPricing extends React.Component {
    render() {
      return (
        <div className="ViewPricing">
          <h1>
            <Badge variant="primary">$$</Badge> Asset Pricing 
          </h1>  
      
          <Button variant="success" size="lg" active>
            Bought
          </Button>{' '}
          <Button variant="secondary" size="lg" active>
            Others
          </Button>
          <p>    <br/>   </p>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Current Price($)</th>
              <th>Time of Last Price Update </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>TechTrek(TTK)</td>
                <td>1000</td>
                <td>05/03/2021 19:20:30</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
}

export default ViewPricing;



