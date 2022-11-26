import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <section class="w3-container">
            <h3 id="formular">Decentralized Ticket Platform</h3>
            <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="" action="" method="">
                <h4>Create Event</h4>

                <label for="eventNameCreate">Event name:</label><br />
                <input name="eventNameCreate" type="text" size="20" value="" required /><br />
                <br />

                <label for="ticketQuantityCreate">Number of tickets:</label><br />
                <input name="ticketQuantityCreate" type="number" size="4" min="1" max="100000" value="" required /><br />
                <br />

                <label for="ticketPrice">Price per ticket:</label><br />
                <input name="ticketPrice" type="number" size="4" min="10" max="500" value="" required /><br />
                <br />

                <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
                <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
            </form>

            <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="" action="" method="">
                <h4>Buy Ticket</h4>

                <label for="eventNameBuy">Event name:</label><br />
                <input name="eventNameBuy" type="text" size="20" value="" required /><br />
                <br />

                <label for="ticketQuantityBuy">Number of tickets:</label><br />
                <input name="ticketQuantityBuy" type="number" size="4" min="1" max="1" value="1" required /><br />
                <br />

                <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
                <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
            </form>

            <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="" action="" method="">
                <h4>Get Entry</h4>

                <label for="eventNameEntry">Event name:</label><br />
                <input name="eventNameEntry" type="text" size="20" value="" required /><br />
                <br />

                <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
                <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
            </form>

            <form class="w3-panel w3-col m3 w3-card w3-row" onsubmit="" action="" method="">
                <h4>Refund Ticket</h4>

                <label for="eventNameRefund">Event name:</label><br />
                <input name="eventNameRefund" type="text" size="20" value="" required /><br />
                <br />

                <label for="ticketQuantityRefund">Number of tickets:</label><br />
                <input name="ticketQuantityRefund" type="number" size="4" min="1" max="1" value="1" required /><br />
                <br />

                <button class="w3-button w3-light-grey" type="submit" name="send">Send</button>
                <button class="w3-button w3-light-grey" type="reset" name="delete">Delete</button>
            </form>
        </section>
    );
  }
}

export default App;
