// returns the header node

import styles from "./heading.module.css"

export default () => {
    const header = document.createElement("header")
    header.classList.add(styles["header-banner"])

    // title
    const title = document.createElement("h2")
    title.textContent = "Le Drain D'Orage"
    header.appendChild(title)

    // nav list
    const nav = document.createElement("nav")
    const navList = document.createElement("ul")
    navList.classList.add(styles["nav-list"])

    const navOptions = ["home", "menu", "contact"]
    navOptions.forEach((page) => {
        const navListOption = document.createElement("li")
        const navLink = document.createElement("a")
        navLink.textContent = page.charAt(0).toUpperCase() + page.slice(1)
        navLink.setAttribute("href", "/")
        navLink.setAttribute("id", `${page}-link`)
        navLink.classList.add(styles["nav-link"])
        navListOption.appendChild(navLink)
        navList.appendChild(navListOption)
    })
    nav.append(navList)
    nav.classList.add(styles["nav-wrapper"])
    header.appendChild(nav)

    return header
}
