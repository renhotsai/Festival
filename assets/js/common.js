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

