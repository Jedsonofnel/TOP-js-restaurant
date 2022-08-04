// renders the page using the DOM
export default function () {
    const contentWrapper = document.createElement("div")
    contentWrapper.setAttribute("id", "content")
    document.body.appendChild(contentWrapper)

    contentWrapper.appendChild(heading())
}

const heading = () => {
    const header = document.createElement("header")

    // title
    const title = document.createElement("h2")
    title.textContent = "Le Drain D'Orage"
    header.appendChild(title)

    // nav list
    const nav = document.createElement("nav")
    const navList = document.createElement("ul")
    const navOptions = ["home", "menu", "contact"]
    navOptions.forEach((page) => {
        const navListOption = document.createElement("li")
        const navLink = document.createElement("a")
        navLink.textContent = page
        navLink.setAttribute("href", "/")
        navListOption.appendChild(navLink)
        navList.appendChild(navListOption)
    })
    nav.append(navList)
    header.appendChild(nav)

    return header
}
