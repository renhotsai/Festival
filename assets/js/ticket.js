const calTicket = () => {

    const ticket_quantity = document.getElementById("ticket-quantity").value;
    const ticketIndex = parseInt(document.getElementById("ticket-name").value);
    const ticket_credit_info = document.getElementById("ticket-credit-info").value;

    let outputData = ``;
    let ticketAmt = 0;

    if (ticket_quantity <= 0) {
        outputData += `<p style="color: red;"> Error: Minimum ticket quantity is 1!</p>`;
        document.getElementById("order-summary").innerHTML = outputData;
        return;
    }

    if (ticket_credit_info.length !== 6) {
        outputData += `<p style="color: red;"> Error: Credit card number should be 6 digits!</p>`;
        document.getElementById("order-summary").innerHTML = outputData;
        return;
    }

    switch (ticketIndex) {
        case 1:
        case 2:
        case 3:
            headLinerList.forEach(ticket => {
                if (ticket.id === ticketIndex) {
                    ticketAmt = ticket.total;
                    return;
                }
            });
            break;
        case 4:
        case 5:
        case 6:
            classicPassList.forEach(ticket => {
                if (ticket.id === ticketIndex) {
                    ticketAmt = ticket.total;
                    return;
                }
            });
        default:
            individualTicketList.forEach(ticket => {
                if (ticket.id === ticketIndex) {
                    ticketAmt = ticket.total;
                    return;
                }
            });
            break;
    }
    const subtotal = ticketAmt * ticket_quantity;
    const tax = subtotal * 0.13;
    const final_price = subtotal + tax;

    outputData += `<div style="display: flex; 
                                   flex-direction: column; 
                                   border: 2px solid black; 
                                   background-color: #F1EFEF;
                                   padding: 30px;
                                   margin-top: 15px;
                                   border-radius: 15px;">
                        <h2> Transaction receipt </h2>
                        <p>------------------------------</p>
                        <p> Number of tickets: ${ticket_quantity}</p>
                        <p> Price per ticket: $${ticketAmt.toFixed(2)}</p>
                        <p> Subtotal: $${subtotal.toFixed(2)}</p>
                        <p> Tax (13%): $${tax.toFixed(2)}</p>
                        <p> Final Price: $${final_price.toFixed(2)}</p>
                       </div>`

    document.getElementById("order-summary").innerHTML = outputData;
}

if (document.getElementById("submit-btn") !== null) {
    document.getElementById("submit-btn").addEventListener("click", calTicket);
}


const individualTicketList = [
    { id: 1, name: "Single Tickets ($39.5)", info1: "Single Tickets Starting At", amt: 39, cent: 50, total: 39.50 }
];

const headLinerList = [
    { id: 5, name: "Headliner Pass + 2 Credits ($94)", info1: "1 Headliner Ticket", info2: "2 Credits for The 42", amt: 94, cent: 0, total: 94 },
    { id: 6, name: "Headliner Pass + 6 Credits ($144)", info1: "1 Headliner Ticket, with great seats!", info2: "6 Credits for The 42", amt: 144, cent: 0, total: 144 },
    { id: 7, name: "Headliner Pass + 12 Credits ($204)", info1: "1 Headliner Ticket, with FANTASTIC seats!", info2: "12 Credits for The 42", amt: 204, cent: 0, total: 204 }
];

const classicPassList = [
    { id: 2, name: "Classic 2 Credit Pass ($69)", info1: "2 Credits for The 42", amt: 69, cent: 0, total: 69 },
    { id: 3, name: "Classic 4 Credit Pass ($99)", info1: "4 Credits for The 42", amt: 99, cent: 0, total: 99 },
    { id: 4, name: "Classic 6 Credit Pass ($119)", info1: "6 Credits for The 42", amt: 119, cent: 0, total: 119 }
];


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


const headLinerTickets = () => {

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


const allTickets = () => {
    individualTickets();
    classicPasses();
    headLinerTickets();
}

const ticketTypes = [
    { id: "individualTicket", name: "INDIVIDUAL TICKETS", list: individualTicketList },
    { id: "classicPass", name: "THE CLASSIC PASS", list: classicPassList },
    { id: "headLiner", name: "THE HEADLINER PASSES", list: headLinerList },
];


const ticketTypeOption = () => {
    if (document.getElementById("ticket-type") !== null) {

        document.getElementById("ticket-type").innerHTM = "";
        ticketTypes.forEach(ticketType => {
            document.getElementById("ticket-type").innerHTML += `<option value="${ticketType.id}">${ticketType.name}</option>`
        });
        changeOption();
    }
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


window.addEventListener("load", ticketTypeOption);
if (document.getElementById("ticket-type") !== null) {
    document.getElementById("ticket-type").addEventListener("change", changeOption);
}