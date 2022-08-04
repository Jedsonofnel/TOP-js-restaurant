// returns the header node

export default () => {
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
        navLink.setAttribute("id", `${page}-link`)
        navListOption.appendChild(navLink)
        navList.appendChild(navListOption)
    })
    nav.append(navList)
    header.appendChild(nav)

    return header
}
