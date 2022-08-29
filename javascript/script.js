let allImages = ["01", "02", "03", "04", "05"];
let currentImage = 0;
let previewImage = [];
const image = document.getElementById("imageFull");
const imgRaccolta = document.querySelector(".img-raccolta");

function changeImage(value) {
  image.setAttribute("src", `img/${allImages[value]}.jpg`);
  previewImage[currentImage].classList.remove("active");
  currentImage = value;
  previewImage[value].classList.add("active");
}

for (let i = 0; i < allImages.length; i++) {
  const preview = document.createElement("img");
  preview.setAttribute("src", `img/${allImages[i]}.jpg`);
  if (i === 0) {
    preview.classList.add("active");
  }

  preview.addEventListener("mouseenter", () => {
    let previous = currentImage;
    let check = false;
    changeImage(i);
    preview.addEventListener("mouseleave", () => {
      if (!check) changeImage(previous);
    });
    preview.addEventListener("click", () => {
      changeImage(i);
      check = true;
    });
  });

  previewImage.push(preview);
  imgRaccolta.appendChild(preview);
}

console.log(previewImage);

// DOWNARROW
const downArrow = document.getElementById("downArrow");
downArrow.addEventListener("click", () => {
  let futureImage = currentImage;

  if (currentImage === allImages.length - 1) {
    futureImage = 0;
  } else {
    futureImage++;
  }
  changeImage(futureImage);
});

//UPARROW
upArrow.addEventListener("click", () => {
  let futureImage = currentImage;
  if (currentImage === 0) {
    futureImage = allImages.length - 1;
  } else {
    futureImage--;
  }
  changeImage(futureImage);
});