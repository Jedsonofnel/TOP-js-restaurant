// factory function for dishes
const Dish = (desc, price) => {
    const render = () => {
        const dishLI = document.createElement("li")
        dishLI.innerHTML = `<span class="desc">${desc}</span><span class="price">£${price}</span>`
        return dishLI
    }
    return {
        desc,
        price,
        render,
    }
}

const starters = () => {
    const starterList = [
        Dish("Summer salad with extra sun.", 5),
        Dish("Tomato soup from a can.", 2),
        Dish("Tomato soup from an amateur chef.", 6),
        Dish("Tomato soup from an experienced chef.", 15),
        Dish("Olive and rosemary focaccia.", 10),
    ]
    const starterUL = document.createElement("ul")
    starterList.forEach((dish) => {
        starterUL.append(dish.render())
    })

    return starterUL
}

const mains = () => {
    const mainsList = [
        Dish("Steak done how you like.", 15),
        Dish("Lamb (dead or alive) with turnips.", 30),
        Dish("Infinite monkeys with kitchens.", 16),
        Dish("Spag bol but done really really well", 12),
    ]

    const mainsUL = document.createElement("ul")
    mainsList.forEach((dish) => {
        mainsUL.append(dish.render())
    })

    return mainsUL
}

const pudding = () => {
    const puddingList = [
        Dish("Deconstructed cake (oven included).", 13),
        Dish("Tiramisu with a blindfolded horse.", 15),
        Dish("Peppermint tea for the diet-conscious.", 2),
    ]

    const puddingUL = document.createElement("ul")
    puddingList.forEach((dish) => {
        puddingUL.append(dish.render())
    })

    return puddingUL
}

// returns menu page node
export default () => {
    const menu = document.createElement("main")
    menu.setAttribute("class", "page")

    const title = document.createElement("h1")
    title.textContent = "Our Menu"
    menu.appendChild(title)

    const starterTitle = document.createElement("h2")
    starterTitle.textContent = "Starters"
    menu.appendChild(starterTitle)
    menu.appendChild(starters())

    const mainsTitle = document.createElement("h2")
    mainsTitle.textContent = "Mains"
    menu.appendChild(mainsTitle)
    menu.appendChild(mains())

    const puddingTitle = document.createElement("h2")
    puddingTitle.textContent = "Pudding"
    menu.appendChild(puddingTitle)
    menu.appendChild(pudding())

    return menu
}
