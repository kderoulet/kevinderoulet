function openTab(evt, tabName) {
    let tabLinks = document.getElementsByClassName("tab-link")
    let tabContent = document.getElementsByClassName("tab-content")
    
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active")
        tabContent[i].classList.remove("active")
    }

    document.getElementById(tabName).classList.add("active")
    evt.currentTarget.classList.add("active")
}
