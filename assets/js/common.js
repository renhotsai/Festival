// header
const headerItems = [
    { name: "Home", uri: "../index.html" },
    { name: "Details", uri: "/view/details.html" },
    { name: "Tickets", uri: "/view/ticket.html" },
    { name: "Contact", uri: "/view/contact.html"},
];

let headerTag;

for (const headerItem of headerItems) {
    if (headerTag === undefined) {
        headerTag = `<a href="${headerItem.uri}">${headerItem.name}</a>`
    }
    else {
        headerTag += `<a href="${headerItem.uri}">${headerItem.name}</a>`
    }
}


document.querySelector("header").innerHTML = headerTag;


// footer
const footerItems = [
    { name: "instagram", icon: `<i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>`, uri: `https://www.instagram.com/JFLtoronto` },
    { name: "facebook", icon: `<i class="fa-brands fa-facebook-f fa-2xl" style="color: #ffffff;"></i>`, uri: `https://www.facebook.com/JFLTORONTO` },
    { name: "youtube", icon: `<i class="fa-brands fa-youtube fa-2xl" style="color: #ffffff;"></i>`, uri: `https://www.youtube.com/justforlaughs` },
]
let footerTag = `
<div style="align-items: end;">
<img
  src="../assets/image/logo5-hub-header-en.svg"
  alt="hahahaIcon"
  style="width: 120px"
/>
<p id="haName">HAHAHA.COM</p>
</div>
<div style="display: flex; flex-direction: column;">
    <div>
        <p>MORE FUNNY IN MANY MORE PLACES</p>
    </div>
    <div style="display: flex; justify-content: space-around;">`
    for (footerItem of footerItems) {
        footerTag += `<a href= "${footerItem.uri}"
     >${footerItem.icon}</a>`
    } 
    footerTag +=
    `</div>
</div>
`
document.querySelector("footer").innerHTML = footerTag;