// index script 

// selecting all of the div tags from the transaction_buttons class
const opting_list = document.querySelectorAll(".transaction_buttons div")

// selecting all of the div tags form the .section_transaction .container
const area_list = document.querySelectorAll(".section_transaction .container div")


// adding event listener
for (const button of opting_list) {
    button.addEventListener("click", () => {
        verify()

        button.classList.add("active")
        
        const value = button.classList[0]
        area_overlay(value)
    })
}

// verifying if another button also have the "active" class
function verify() {
    for (const button of opting_list) {
        if (button.classList.contains("active")) {
            button.classList.remove("active")
        }
    }
}

// adding and removing the "hidden" attribute on the divs tags
function area_overlay(name) {
    for (let area of area_list) {
        if (area.classList.contains(`${name}_div`)) {
            area.removeAttribute("hidden")
        } else {
            area.setAttribute("hidden", true)
        }
    }
}

