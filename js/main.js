// get the form field, item list, and the search/filter bar
const form = document.querySelector("#addForm")
const item = document.querySelector("#items")
const filter = document.querySelector("#filter")


// Form Events
// adds a new list item to the item list 'UL' when ever a user submits a new value
form.addEventListener("submit", (e) => {

    // Prevent Default
    e.preventDefault()

    // get the form input field
    // fetch it's value, afterwards
    const input = e.target.firstElementChild;

    // checks if input value is not empty
    if(!input.value) {
        
        // grab the h2 title above our input, and display a warning message there
        const warnText = document.querySelector("#main > .title")
        const initContent = warnText.textContent;

        // Add transition to the warnText
        warnText.style.transition = "all 0.5s ease-in-out"
        
        // add a class, that changes the text color
        warnText.classList.add("warn-text")

        //change the warnText's InnerText
        warnText.textContent = "*Input Field can't be Empty!"

        // set timeout, let the h2 textContent be reverted to it's original text, by clearing off the added class, after 3s
        setTimeout(() => {
            warnText.classList.remove("warn-text")
            warnText.textContent = initContent
        }, 2400);

    } else {

        // create an li element
        const li = document.createElement("li")

        // add a the 'list-group-item' class to it
        li.classList.add("list-group-item")

        // add a new textnode to li
        li.appendChild(document.createTextNode(input.value))

        // add a delete btn
        // append an 'x' textNode to it
        // then, append the deletebtn to the list item
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


// Delete button event
// We check if the target's classname matches that which we've assigned to the deletebtn
// If it's a match, we remove, dynamically, it's parentElement
item.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove()
    }
})

// Filter Event
filter.addEventListener("keyup", (e) => {

    // get filter/search text, convert to lowercase
    const filterText = e.target.value.toLowerCase()

    // get all List items
    const listItems = item.querySelectorAll("li")

    // iterate through the list items
    listItems.forEach((item) => {

        // get the list item first child's textContent, then convert to lowercase
        const itemName = item.firstChild.textContent.toLowerCase()

        // check if the list item, and the first child's text content contains the filtered/searched text
        if(itemName.includes(filterText)) {

            // set the list item's display to flex
            // if it's name contains the searched text
            item.style.display = "flex"
        } else {

            // else, set display to flex
            item.style.display = "none"
        }
    })
})


// Input field, focus event
// whenever the user focuses on the input field
// We reset the search box,
// And restore the display value of our list items
form.firstElementChild.addEventListener("focus", (e) => {
    
    // reset the search box's value to ""
    filter.value = ""

    // set our list item's display to flex
    const listItems = item.querySelectorAll("li")

    // loop through the list items, to revert the 'display' styles
    listItems.forEach((i) => {
        i.style.display = "flex"
    })
})