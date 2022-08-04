import heading from "./heading.js"
import homePage from "./home-page.js"

const contentWrapper = document.createElement("div")
contentWrapper.setAttribute("id", "content")
document.body.appendChild(contentWrapper)

// add heading (which will not change)
contentWrapper.appendChild(heading())

// pass this function the function that returns nodetree for the page
const renderPage = (page) => {
    if (contentWrapper.childNodes.length > 1) {
        contentWrapper.removeChild(document.getElementById("page"))
    }
    contentWrapper.appendChild(page())
}

// TODO addEventListeners to nav

renderPage(homePage)
