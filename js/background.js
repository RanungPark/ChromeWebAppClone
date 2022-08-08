const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const bodyBackgroundImg = document.body;
bodyBackgroundImg.setAttribute('style',`background-image: url(img/${chosenImage});`);