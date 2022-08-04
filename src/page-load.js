// renders the page using the DOM
export default function () {
    const contentWrapper = document.createElement("div");
    contentWrapper.setAttribute("id", "content");
    document.body.appendChild(contentWrapper);

    const title = document.createElement("h1");
    title.textContent = "Hello from the javascript!";
    contentWrapper.appendChild(title);
}

const heading = () => {
    const header = document.createElement("header");
};
