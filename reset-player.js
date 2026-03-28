function reset() {
  let resetX = 80;
  let resetY = 250;
  player1.x = resetX;
  player1.y = resetY;
  flag = false;
  drawFrame();
  setTimeout(() => {
    flag = true;

    requestAnimationFrame(draw);
  }, 3000);
  showMeme();
}

function showMeme() {
  const memes = [
    "./img/meme1.jpeg",
    "./img/meme2.jpeg",
    "./img/meme3.jpeg",
    "./img/meme4.jpeg",
  ];

  const randomIndex = Math.floor(Math.random() * memes.length);
  const randomSrc = memes[randomIndex];

  const img = document.createElement("img");
  img.src = randomSrc;

  img.style.position = "fixed";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.zIndex = "9999";
  img.style.width = "700px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 3000);
}
