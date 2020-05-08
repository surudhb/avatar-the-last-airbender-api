function handleClick(e) {
    console.log(e.target)
    console.log(e.currentTarget)
    const masterButton = document.getElementsByClassName('master')[0]
    const inputs = document.getElementsByTagName('input')
    const makeActive = masterButton.textContent == "Expand All" ? true : false
    for (input of inputs) {
        if(makeActive && input.checked == false) input.parentNode.children[1].click()
        if(!makeActive && input.checked == true) input.parentNode.children[1].click()
    }
    masterButton.textContent = masterButton.textContent == "Expand All" ? "Collapse All" : "Expand All" 
}

function handleCheck(e) {
    if(e.target.className != "collapsible") {
        const text = e.target.innerText.split("\n")
        const symbol = text[1] == "+" ? "-" : "+"
        e.target.innerHTML = `<span>${text[0]} <span style=\"float: right;\">${symbol}</span></span>`
    }
    e.stopPropagation()
}