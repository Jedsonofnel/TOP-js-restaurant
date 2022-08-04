// renders the page using the DOM
export default function () {
    const contentWrapper = document.createElement("div")
    contentWrapper.setAttribute("id", "content")
    document.body.appendChild(contentWrapper)

    contentWrapper.appendChild(heading())
    contentWrapper.appendChild(homePage())
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

const homePage = () => {
    const home = document.createElement("main")

    // title
    const title = document.createElement("h1")
    title.innerHTML = `Welcome to <em>'Le Drain D'Orage'</em>`
    home.appendChild(title)

    // about text
    const aboutHeading = document.createElement("h2")
    aboutHeading.textContent = "About our restaurant"

    const description = document.createElement("p")
    description.innerHTML = `Here at <em>'Le Drain D'Orage'</em> we pride ourselves on the veritable cornucopia of eclectic French cuisine that we are able to serve up, much in the same way that any self-respecting storm drain has pride in its ability to serve up an exotic menagerie of groundwater. With excellent ambience, ambitious live music and arguably the friendliest staff on this side of this part of the street, we think it is very difficult <em>not</em> to have a wholly enjoyable meal here, so why not stop by?`

    home.appendChild(aboutHeading)
    home.appendChild(description)

    // quotation
    const quotation = document.createElement("blockquote")
    quotation.innerHTML = `"Before eating here I was guilty of expressing rather adverse opinions of fictional eateries with a penchance for the whimsical and absurd, I still am, but I used to be also."<br>- One customer`
    home.append(quotation)

    // gallery
    const gallery = document.createElement("div")
    gallery.setAttribute("id", "gallery")

    const attributions = [
        "Photo by Mia De Jesus on Unsplash",
        "Photo by ABISHEK HAJARE on Unsplash",
        "Photo by Lucas Andrade on Unsplash",
        "Photo by Metin Ozer on Unsplash",
        "Photo by Or Hakim on Unsplash",
    ]

    return home
}
