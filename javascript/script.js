
let allImages = ["01", "02", "03", "04", "05"]
let currentImage = 0;
let previewImage = []

console.log(currentImage.toFixed(1))


const imgRaccolta = document.querySelector(".img-raccolta");
for (let i = 0; i < allImages.length; i++) {
    const preview = document.createElement("img");
    preview.setAttribute("src", `img/${allImages[i]}.jpg`)
    if (i === 0) {
        preview.classList.add("active")
    }
    previewImage.push(preview)
    imgRaccolta.appendChild(preview)
   
}

console.log(previewImage)

// DOWNARROW
const downArrow = document.getElementById("downArrow")
downArrow.addEventListener("click", () => {
    previewImage[currentImage].classList.remove("active")

    if (currentImage === (allImages.length -1)) {
        currentImage = 0;
    }
    else {
        currentImage++
    }

    previewImage[currentImage].classList.add("active")
    const image = document.getElementById("imageFull")
    image.setAttribute("src", `img/${allImages[currentImage]}.jpg`)

})

//UPARROW
upArrow.addEventListener("click", () => {
    previewImage[currentImage].classList.remove("active")
    if (currentImage === 0) {
        currentImage = allImages.length -1;
    }
    else {
        currentImage--
    }
    previewImage[currentImage].classList.add("active")
    const image = document.getElementById("imageFull")
    image.setAttribute("src", `img/${allImages[currentImage]}.jpg`)

})