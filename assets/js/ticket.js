
const ticketNameGenerate = () => {
  
    const ticket_type = document.getElementById("ticket-type").value; 
    const ticket_name = document.getElementById("ticket-name").value; 

    let outputData = ``;

    if (ticket_type === "individual") {
        outputData += `<option value="single">Single Ticket ($39.5)</option>`
    } else if (ticket_type === "classic") {
        outputData += `<option value="credit-two-pass"> Classic 2 Credit Pass ($69)</option>
                       <option value="credit-four-pass"> Classic 4 Credit Pass ($99)</option>
                       <option value="credit-six-pass"> Classic 6 Credit Pass ($119)</option>`
    } else if (ticket_type === "headliner") {
        outputData += `<option value="headliner-two-pass">Headliner Pass + 2 Credits ($94)</option>
                       <option value="headliner-six-pass">Headliner Pass + 6 Credits ($144)</option>
                       <option value="headliner-tweleve-pass">Headliner Pass + 12 Credits ($204)</option>`
    } else {
        console.log("Error: ticket type does not exist!");
    }
    document.getElementById("ticket-name").innerHTML = outputData;
}

const calTicket = () => {
    const ticket_quantity = document.getElementById("ticket-quantity").value; 
    const ticket_credit_info = document.getElementById("ticket-credit-info").value; 
    const ticket_name = document.getElementById("ticket-name").value; 
    let ticket_price; 
    let outputData = ``;

    if (ticket_quantity <= 0) {
        outputData += `<p style="color: red;"> Error: Minimum ticket quantity is 1!</p>`;
    } else if (ticket_credit_info.length !== 6) {
        outputData += `<p style="color: red;"> Error: Credit card number should be 6 digits!</p>`; 
    } else {
        if (ticket_name === "single") {
            ticket_price = 39.5; 
        } else if (ticket_name === "credit-two-pass") {
            ticket_price = 69; 
        } else if (ticket_name === "credit-four-pass") {
            ticket_price = 99;
        } else if (ticket_name === "credit-six-pass") {
            ticket_price = 119;
        } else if (ticket_name === "headliner-two-pass") {
            ticket_price = 94;
        } else if (ticket_name === "headliner-six-pass") {
            ticket_price = 144; 
        } else if (ticket_name === "headliner-tweleve-pass") {
            ticket_price = 204; 
        }
    
        const subtotal = ticket_price * ticket_quantity; 
        const tax = subtotal * 0.13; 
        const final_price = subtotal + tax; 
    
        outputData += `<div style="display: flex; 
                                   flex-direction: column; 
                                   border: 2px solid black; 
                                   background-color: #F1EFEF;
                                   padding: 30px;
                                   margin-top: 15px">
                        <h2> Transaction receipt </h2>
                        <p> Number of tickets: ${ticket_quantity}</p>
                        <p> Price per ticket: $${ticket_price.toFixed(2)}</p>
                        <p> Subtotal: $${subtotal.toFixed(2)}</p>
                        <p> Tax (13%): $${tax.toFixed(2)}</p>
                        <p> Final Price: $${final_price.toFixed(2)}</p>
                       </div>`    
    }

    document.getElementById("order-summary").innerHTML = outputData;
}

document.getElementById("submit-btn").addEventListener("click", calTicket); 
document.getElementById("ticket-type").addEventListener("change", ticketNameGenerate); 

const headLinerList = [
    { id: 1, name: "Headliner Pass + 2 Credits", info1: "1 Headliner Ticket", info2: "2 Credits for The 42", amt: 94, cent: 0, total: 94 },
    { id: 2, name: "Headliner Pass + 6 Credits", info1: "1 Headliner Ticket, with great seats!", info2: "6 Credits for The 42", amt: 144, cent: 0, total: 144 },
    { id: 3, name: "Headliner Pass + 12 Credits", info1: "1 Headliner Ticket, with FANTASTIC seats!", info2: "12 Credits for The 42", amt: 204, cent: 0, total: 204 }
];

const classicPassList = [
    { id: 4, name: "Classic 2 Credit Pass", info1: "2 Credits for The 42", amt: 69, cent: 0, total: 69 },
    { id: 5, name: "Classic 4 Credit Pass", info1: "4 Credits for The 42", amt: 99, cent: 0, total: 99 },
    { id: 6, name: "Classic 6 Credit Pass", info1: "6 Credits for The 42", amt: 119, cent: 0, total: 119 }
];

const individualTicketList = [
    { id: 7, name: "INDIVIDUAL TICKETS", info1: "Single Tickets Starting At", amt: 39, cent: 50, total: 39.50 }
];


const headLinerTickets = () =>{

document.getElementById("headLinerTicket").innerHTML = "";
headLinerList.forEach(ticket => {
    const ticketContainer = `
<div class="ticketInfo">
<p class="ticketName">${ticket.name}</p>
<p class="ticketContent">${ticket.info1}</p>
<p class="ticketContent">${ticket.info2}</p>
<p class="amt"><sup>$</sup>${ticket.amt}<sup>*</sup></p>
<a href="#" class="btn_buy">Buy</a>
</div>`;
    document.getElementById("headLinerTicket").innerHTML += ticketContainer;
});
}
const classicPasses = () => {

document.getElementById("classicPasses").innerHTML = "";
classicPassList.forEach(ticket => {
    const ticketContainer = `
<div class="ticketInfo">
<p class="ticketName">${ticket.name}</p>
<p class="ticketContent">${ticket.info1}</p>
<p class="amt"><sup>$</sup>${ticket.amt}<sup>*</sup></p>
<a href="#" class="btn_buy">Buy</a>
</div>`;
    document.getElementById("classicPasses").innerHTML += ticketContainer;
});
}

const individualTickets = () => {

document.getElementById("individualTickets").innerHTML = "";
individualTicketList.forEach(ticket => {
    const ticketContainer = `
<div class="ticketInfo">
<p class="ticketContent">${ticket.info1}</p>
<p class="amt"><sup>$</sup>${ticket.amt}<sup style="color:#D80032">${ticket.cent}</sup><sup>*</sup></p>
<a href="#" class="btn_buy">Buy</a>
</div>`;
    document.getElementById("individualTickets").innerHTML += ticketContainer;
});
}

const allTickets = () => {
    headLinerTickets();
    classicPasses();
    individualTickets();
}

const ticketTypes = [
    { id: "headLiner", name: "THE HEADLINER PASSES", list: headLinerList },
    { id: "classicPass", name: "THE CLASSIC PASS", list: classicPassList },
    { id: "individualTicket", name: "INDIVIDUAL TICKETS", list: individualTicketList }
];


const ticketTypeOption = () => {
    document.getElementById("ticket-type").innerHTM = "";
    ticketTypes.forEach(ticketType => {
        document.getElementById("ticket-type").innerHTML += `<option value="${ticketType.id}">${ticketType.name}</option>`
    });
    changeOption();
}

const changeOption = () => {
    document.getElementById("ticket-name").innerHTML = "";
    const id = document.getElementById("ticket-type").value;
    ticketTypes.forEach(ticketType => {
        if (ticketType.id === id) {
            ticketType.list.forEach(ticket => {
                document.getElementById("ticket-name").innerHTML += `<option value="${ticket.id}">${ticket.name}</option>`
            });
        }
    });
}
window.addEventListener("load",ticketTypeOption);
document.getElementById("ticket-type").addEventListener("change",changeOption);