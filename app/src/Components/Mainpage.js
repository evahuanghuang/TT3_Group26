import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

class Mainpage extends Component {
    render() {
        return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" href="#">TechTrek 3</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">User Information<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/viewPricing">Current Asset Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/transHistory">Transactions History</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Balances
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Assets Balance</a>
                <a class="dropdown-item" href="#">Cash Balance</a>
                {/* <a class="dropdown-item" href="#">Something else here</a> */}
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Buy/Sell</a>
            </li>
            </ul>
        </div>
        </nav >
    
        );
    }
}

export default Mainpage;