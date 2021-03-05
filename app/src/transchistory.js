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

class TranscHistory extends React.Component {
    render() {
        return (
            <div className="TranscHistory">
                <h1>Transaction History</h1>
                <h3>View History in</h3>
                <Button variant="outline-primary"></Button>{'Lastest Month'}
                <Button variant="outline-primary">Secondary</Button>{'Last 3 Months'}
                <Button variant="outline-primary">Success</Button>{'Last 6 Months'}

                <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Transaction ID</th>
                    <th>Order Type</th>
                    <th>Date and Time</th>
                    <th>Asset Name</th>
                    <th>Asset Amount</th>
                    <th>Asset Price</th>
                    <th>Cash Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>12345</td>
                    <td>"BUY"</td>
                    <td>05/03/2021 18:00:00</td>
                    <td>GLD</td>
                    <td>2000</td>
                    <td>500</td>
                    <td>100000</td>
                    </tr>
                    <td>12328</td>
                    <td>"BUY"</td>
                    <td>05/03/2021 20:00:00</td>
                    <td>TTK</td>
                    <td>100</td>
                    <td>1000</td>
                    <td>100000</td>
                    </tbody>
                    </Table>
            </div>
        );
    }
} 

export default TranscHistory;