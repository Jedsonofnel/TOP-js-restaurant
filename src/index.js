import heading from "./heading.js"
import homePage from "./home-page.js"
import menuPage from "./menu-page.js"
import contactPage from "./contact-page.js"
import "./font-declaration.css"
import "./global.css"

const contentWrapper = document.createElement("div")
contentWrapper.setAttribute("id", "content")
document.body.appendChild(contentWrapper)

// add heading (which will not change)
contentWrapper.appendChild(heading())

// pass this function the function that returns nodetree for the page
const renderPage = (page) => {
    if (contentWrapper.childNodes.length > 1) {
        contentWrapper.removeChild(document.getElementsByClassName("page")[0])
    }
    contentWrapper.appendChild(page())
}

const handleNav = (page) => {
    return (event) => {
        event.preventDefault()
        renderPage(page)
    }
}

document
    .getElementById("home-link")
    .addEventListener("click", handleNav(homePage))

document
    .getElementById("menu-link")
    .addEventListener("click", handleNav(menuPage))

document
    .getElementById("contact-link")
    .addEventListener("click", handleNav(contactPage))

renderPage(homePage)
