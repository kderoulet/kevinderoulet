function scrollToElement(element) {

    let targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 25
    let currentPosition = window.pageYOffset
    let maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight

    if (targetPosition > maxScrollPosition) {
        targetPosition = maxScrollPosition
    }

    smoothScroll(currentPosition, targetPosition)
}

function smoothScroll(start, end) {
    let smoothingValue = 0.15

    function animate() {
        let difference = end - start
        if (Math.abs(difference) <= 0.5) {
            window.scrollTo(0, end)
        } else {
            start = start * (1 - smoothingValue) + end * smoothingValue
            window.scrollTo(0, Math.round(start))
            requestAnimationFrame(animate)    
        }
    }

    requestAnimationFrame(animate)
}
