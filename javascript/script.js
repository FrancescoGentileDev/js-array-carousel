
let allImages = ["01", "02", "03", "04", "05"]
let currentImage = 0;

console.log(currentImage.toFixed(1))


// DOWNARROW
const downArrow = document.getElementById("downArrow")

downArrow.addEventListener("click", () => {
    if (currentImage === (allImages.length -1)) {
        currentImage = 0;
    }
    else {
        currentImage++
    }
    console.log(currentImage)

    const image = document.getElementById("imageFull")
    image.setAttribute("src", `img/${allImages[currentImage]}.jpg`)

})
upArrow.addEventListener("click", () => {
    if (currentImage === 0) {
        currentImage = allImages.length -1;
    }
    else {
        currentImage--
    }
    console.log(currentImage)

    const image = document.getElementById("imageFull")
    image.setAttribute("src", `img/${allImages[currentImage]}.jpg`)

})