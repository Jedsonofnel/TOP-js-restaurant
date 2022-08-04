import Food1 from "./img/abhishek-hajare-iw3bza94-r0-unsplash.jpg?as=webp"
import Food2 from "./img/lucas-andrade-jfvrbelwwms-unsplash.jpg?as=webp"
import Food3 from "./img/metin-ozer-ORDFDnvK4Vk-unsplash.jpg?as=webp"
import Food4 from "./img/mia-de-jesus-4J2FTJ9CkSw-unsplash.jpg?as=webp"
import Food5 from "./img/or-hakim-7NHvPdiUBpM-unsplash.jpg?as=webp"

export default () => {
    const home = document.createElement("main")
    home.setAttribute("class", "page")

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
    const galleryHeading = document.createElement("h2")
    galleryHeading.textContent = "Gallery"

    const gallery = document.createElement("div")
    gallery.setAttribute("id", "gallery")

    const attributions = [
        "Photo by ABISHEK HAJARE on Unsplash",
        "Photo by Lucas Andrade on Unsplash",
        "Photo by Metin Ozer on Unsplash",
        "Photo by Mia De Jesus on Unsplash",
        "Photo by Or Hakim on Unsplash",
    ]

    const imgs = [Food1, Food2, Food3, Food4, Food5]
    imgs.forEach((img, index) => {
        const foodImg = new Image()
        foodImg.src = img
        foodImg.alt = attributions[index]
        gallery.appendChild(foodImg)
    })

    home.append(galleryHeading)
    home.append(gallery)

    return home
}
