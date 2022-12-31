const setupScrooling = () => {
    const container = [...document.querySelectorAll(".movie-container")]
    const prevBtn = [...document.querySelectorAll(".prev-btn")]
    const nextBtn = [...document.querySelectorAll(".next-btn")]

    container.forEach((item, i) => {
        const containerDimensions = item.getBoundingClientRect()
        const containerWidth = containerDimensions.width

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        })

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth
        })
    })
}