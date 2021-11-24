const form = document.querySelector("#addForm")
const item = document.querySelector("#items")
const filter = document.querySelector("#filter")

// Form Events
form.addEventListener("submit", (e) => {

    // Prevent Default
    e.preventDefault()

    // get the form input to obtain's it's value, subsequently
    const input = e.target.firstElementChild;

    // checks if input value is not empty
    if(!input.value) {
        
        // grab the h2 title above our input, and display a warning message there
        const warnText = document.querySelector("#main > .title")
        const initContent = warnText.textContent;
        
        // add a class, that changes the text color
        warnText.classList.add("warn-text")
        warnText.textContent = "*Input Field can't be Empty!"

        // set timeout, let the h2 text revert, by clearing off the added class, after 3s
        setTimeout(() => {
            warnText.classList.remove("warn-text")
            warnText.textContent = initContent
        }, 3000);

    } else {

        // create an li element, and append to the item list
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        // add a new textnode to li
        li.appendChild(document.createTextNode(input.value))

        // add a delete btn
        const delBtn = document.createElement("button")
        delBtn.appendChild(document.createTextNode("x"))
        delBtn.classList.add("delete-btn")
        li.appendChild(delBtn)

        // append li to the itemlist
        item.appendChild(li)

        // clear input value afterwards
        input.value = ""
    }
})