const headLinerList = [
    { index: 1, name: "Headliner Pass + 2 Credits", info1: "1 Headliner Ticket", info2: "2 Credits for The 42", amt: 94 },
    { index: 2, name: "Headliner Pass + 6 Credits", info1: "1 Headliner Ticket, with great seats!", info2: "6 Credits for The 42", amt: 144 },
    { index: 3, name: "Headliner Pass + 12 Credits", info1: "1 Headliner Ticket, with FANTASTIC seats!", info2: "12 Credits for The 42", amt: 204 }
];

const classicPassList = [
    { index: 4, name: "Classic 2 Credit Pass", info1: "2 Credits for The 42", amt: 69 },
    { index: 5, name: "Classic 4 Credit Pass", info1: "4 Credits for The 42", amt: 99 },
    { index: 6, name: "Classic 6 Credit Pass", info1: "6 Credits for The 42", amt: 119 }
];

const individualTicketList = [
    { index: 7, name: "Individual Ticket", info1: "Single Tickets Starting At", amt: 39, cent: 50 }
];


const ticketPage = "./view/ticket.html"

const ticketTypes = [
    { name: headLiner, list: headLinerList },
    { name: classicPass, list: classicPassList },
    { name: individualTicket, list: individualTicketList }
]


const changeOption = (listName) => {
    ticketTypes.forEach(ticketType => {
        if (ticketType.name === listName) {
            ticketType.list.forEach(ticket => {
                document.getElementById("").innerHTML += `<option value="${ticket.index}"></option>`
            });
        }
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
        <a href="`+ ticketPage + `" class="btn_buy">Buy</a>
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
        <a href="`+ ticketPage + `" class="btn_buy">Buy</a>
        </div>`;
        document.getElementById("classicPasses").innerHTML += ticketContainer;
    });
}

const individualTickets = () => {

    document.getElementById("individualTickets").innerHTML = "";
    individualTicketList.forEach(ticket => {
        const ticketContainer = `
        <div class="ticketInfo">
        <p class="ticketName">${ticket.name}</p>
        <p class="ticketContent">${ticket.info1}</p>
        <p class="amt"><sup>$</sup>${ticket.amt}<sup style="color:#D80032">${ticket.cent}</sup><sup>*</sup></p>
        <a href="`+ ticketPage + `" class="btn_buy">Buy</a>
        </div>`;
        document.getElementById("individualTickets").innerHTML += ticketContainer;
    });
}

const allTickets = () => {
    headLinerTickets();
    classicPasses();
    individualTickets();
}