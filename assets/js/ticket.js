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