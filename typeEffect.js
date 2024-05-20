let fullStops = ['.', '?', '!']

function addText(id, copy, longInterval=210, shortInterval=15) {
    let htmlTarget = id.includes('#') ? document.querySelector(id) : document.getElementById(id)
    let len = copy.length
    typeText()

    function typeText(i=0) {
        if (i >= len) {
            return; // Limiting condition
        }
        htmlTarget.childNodes[i].style.opacity = 1
        setTimeout(function() {
            typeText(i + 1)
        }, (fullStops.includes(copy[i])) ? 180 : 11)
    }
}

function setCardSize(sections, copy) {
    sections.forEach((section,i) => {
        let htmlTarget = section.includes('#') ? document.querySelector(section) : document.getElementById(section)
        htmlTarget.innerHTML = copy[i].split('').map(letter => `<span style="opacity: 0;">${letter}</span>`).join('')
    })
}
