function lastreset() {
  let resetX = 80;
  let resetY = 250;
  player1.x = resetX;
  player1.y = resetY;
  flag = false;
  drawFrame();
  setTimeout(() => {
    flag = true;

    requestAnimationFrame(draw);
  }, 5000);
  showLastMeme();
}

function showLastMeme() {
  const memes = ["meme5.jpeg"];

  const img = document.createElement("img");
  img.src = memes[0];

  img.style.position = "fixed";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.zIndex = "9999";
  img.style.width = "700px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 5000);
}
