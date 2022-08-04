// returns contact page node
export default () => {
    const contact = document.createElement("main")
    contact.setAttribute("class", "page")

    const title = document.createElement("h1")
    title.textContent = "Contact Us"
    contact.appendChild(title)

    // reservation section
    const reservationTitle = document.createElement("h2")
    reservationTitle.textContent = "Host an event here!"
    contact.appendChild(reservationTitle)

    const reservationDetails = document.createElement("p")
    reservationDetails.textContent =
        "We are open for large scale reservation! Birthday party? Work event? Family reunion? You'd be very welcome - you can book one of our rooms for up to 16 people by calling us, please be advised that we cannot guarantee availability if done less than a week in advance."
    contact.appendChild(reservationDetails)

    // contact details bit
    const detailsTitle = document.createElement("h2")
    detailsTitle.textContent = "Contact details"
    contact.appendChild(detailsTitle)

    const details = document.createElement("p")
    details.innerHTML = `Our email address is <a href="mailto:example@example.org">example@example.org</a><br>You can call us at +12 345 6789`
    contact.appendChild(details)

    // address bit
    const addressTitle = document.createElement("h2")
    addressTitle.textContent = "How to find us:"
    contact.appendChild(addressTitle)

    const address = document.createElement("address")
    address.innerHTML =
        "42 Example Street,<br>Exampleville,<br>London<br>TW8 9FT"
    contact.appendChild(address)

    return contact
}
