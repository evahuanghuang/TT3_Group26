import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
// import Balanceview from 'Balanceview.jpeg';

const Mainpage = (props) => {
    const [toggleBalance, setTogglebalance] = useState(false);
    const [a, setA] = useState(true);

    const getBalance = (accountKey) => {
        fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'x-api-key': '4EJDDbJ33d3aZNn8s1xKE4MW5nGpRowL2el5LHkS'
            },
            body: JSON.stringify({
              "accountKey": accountKey,
            })
          })
            .then((response) => response.text())
            .then((responseText) =>{
              try {
                var responseJson = JSON.parse(responseText);
                setA(responseJson);
              } catch (e) {}
            })
            .catch((error) => {
              console.error(error);
            });
        }

    getBalance(props?.accountInfo?.accountKey);


    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TechTrek 3</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/viewInfo">User Information<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/viewPricing">Current Asset Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/transHistory">Transactions History</a>
            </li>
            {/* <li class="nav-item dropdown"> */}
            {<li class="nav-item" onClick={() =>setTogglebalance(!toggleBalance)}> 
                {!toggleBalance && <div class="nav-link">Balances: </div>}
                {toggleBalance && <div class="nav-link">Asset Balance: ${a.assetBalance? a.assetBalance : '-'}     Cash Balance: ${a.cashBalance?a.cashBalance:'-'} </div>}
            </li>}
            </ul>
        </div>
        </nav>


)
}

export default Mainpage;