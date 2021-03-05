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

class BuySell extends React.Component {
    render() {
        return (
            <div className="BuySell">
                <h1>Buy and Sell</h1>
                <p>    <br/>   </p>
                <Button variant="info"></Button>{'BUY'}
                <Button variant="info">Secondary</Button>{'SELL'}

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

export default BuySell;