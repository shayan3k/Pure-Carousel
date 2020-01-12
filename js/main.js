var itemId = "control1";
let totalNumberOfImages = 5;
let control = document.querySelectorAll(".control-span");
let images = document.querySelectorAll("img");
console.log(control, images);

for (let i = 0; i < totalNumberOfImages; i++) {
  control[i].addEventListener("click", () => {
    console.log("Hi");

    images.forEach(element => {
      element.style.zIndex = -2;
    });

    images[i].style.zIndex = -1;
  });
}
