// header
const headerItems = ["Home", "Schedule", "Tickets", "Contact"];

let headerTag;
for (const headerItem of headerItems) {
    if (headerTag === undefined) {
        headerTag = `<a href="#">${headerItem}</a>`
    }
    else {
        headerTag += `<a href="#">${headerItem}</a>`
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
  src="./assets/image/logo5-hub-header-en.svg"
  alt="hahahaIcon"
  style="width: 120px"
/>
<p>HAHAHA.COM</p>
</div>
<div style="display: flex; flex-direction: column; padding-top:30px;">
<div style="display: flex; justify-content: space-around;">`
for (footerItem of footerItems) {
    footerTag += `<a href= "${footerItem.uri}"
 >${footerItem.icon}</a>`
}
footerTag +=
    `</div>
<div>
  <p>MORE FUNNY IN MANY MORE PLACES</p>
</div>
</div>
`
document.querySelector("footer").innerHTML = footerTag;