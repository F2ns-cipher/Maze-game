// Canvas Sandbox

// Global Variables

let block1 = new Block(630, 380, 20, 220, "grey");

let block2 = new Block(380, 480, 90, 20, "grey");

let block3 = new Block(380, 480, 20, 60, "grey");

let block4 = new Block(280, 540, 300, 20, "grey");

let block5 = new Block(180, 100, 20, 420, "grey");

let block6 = new Block(260, 0, 20, 150, "grey");

let block7 = new Block(200, 220, 90, 20, "grey");

let block8 = new Block(520, 480, 110, 20, "grey");

let block9 = new Block(380, 420, 200, 20, "grey");

let block10 = new Block(320, 340, 20, 160, "grey");

let block11 = new Block(420, 360, 20, 60, "grey");

let block12 = new Block(320, 360, 100, 20, "grey");

let block13 = new Block(250, 290, 20, 180, "grey");

let block14 = new Block(330, 80, 20, 200, "grey");

let block15 = new Block(250, 280, 100, 20, "grey");

let block16 = new Block(220, 180, 20, 40, "grey");

let block17 = new Block(180, 510, 70, 20, "grey");

let block18 = new Block(280, 520, 20, 20, "grey");

let block19 = new Block(570, 360, 80, 20, "grey");

let block20 = new Block(520, 240, 20, 180, "grey");

let block21 = new Block(600, 300, 20, 60, "grey");

let block22 = new Block(540, 300, 80, 20, "grey");

let block23 = new Block(470, 240, 20, 150, "grey");

let block24 = new Block(380, 310, 100, 20, "grey");

let block25 = new Block(390, 200, 20, 120, "grey");

let block26 = new Block(390, 180, 260, 20, "grey");

let block27 = new Block(640, 100, 20, 100, "grey");

let block28 = new Block(330, 130, 260, 20, "grey");

let block29 = new Block(390, 80, 270, 20, "grey");

let block30 = new Block(460, 30, 20, 50, "grey");

let block31 = new Block(540, 350, 30, 5, "white");

let block32 = new Block(600, 0, 20, 50, "grey");

let block33 = new Block(330, 0, 20, 80, "grey");

let block34 = new Block(324, 0, 3, 80, "white");

let block35 = new Block(420, 0, 5, 80, "white");

let block36 = new Block(560, 0, 5, 80, "white");

let block37 = new Block(720, 0, 20, 560, "grey");

let block38 = new Block(630, 200, 20, 160, "grey");

let block39 = new Block(590, 200, 5, 90, "white");

let block40 = new Block(650, 400, 40, 20, "grey");

let block41 = new Block(650, 365, 70, 5, "white");

let block42 = new Block(690, 590, 20, 10, "grey");

let block43 = new Block(650, 570, 70, 5, "white");

let block44 = new Block(770, 30, 30, 20, "grey");

let block45 = new Block(740, 53, 70, 3, "white");

let end = new Block(780, 0, 20, 20, "red");

var flag = true;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  // Move Player 1
  if (keyPressed["ArrowLeft"]) {
    player1.x += -5;
  } else if (keyPressed["ArrowRight"]) {
    player1.x += 5;
  }
  if (keyPressed["ArrowUp"]) {
    player1.y += -5;
  } else if (keyPressed["ArrowDown"]) {
    player1.y += 5;
  }

  // Rectangle collide border
  if (player1.x < 0) {
    reset();
  } else if (player1.x > cnv.width - 30) {
    reset();
  } else if (player1.y < 0) {
    reset();
  } else if (player1.y > cnv.height - 30) {
    reset();
  }

  // Rectangle collide
  if (rectCollide(player1, block1)) {
    reset();
  } else if (rectCollide(player1, block2)) {
    reset();
  } else if (rectCollide(player1, block3)) {
    reset();
  } else if (rectCollide(player1, block4)) {
    reset();
  } else if (rectCollide(player1, block5)) {
    reset();
  } else if (rectCollide(player1, block6)) {
    reset();
  } else if (rectCollide(player1, block7)) {
    reset();
  } else if (rectCollide(player1, block8)) {
    reset();
  } else if (rectCollide(player1, block9)) {
    reset();
  } else if (rectCollide(player1, block10)) {
    reset();
  } else if (rectCollide(player1, block11)) {
    reset();
  } else if (rectCollide(player1, block12)) {
    reset();
  } else if (rectCollide(player1, block13)) {
    reset();
  } else if (rectCollide(player1, block14)) {
    reset();
  } else if (rectCollide(player1, block15)) {
    reset();
  } else if (rectCollide(player1, block16)) {
    reset();
  } else if (rectCollide(player1, block17)) {
    reset();
  } else if (rectCollide(player1, block18)) {
    reset();
  } else if (rectCollide(player1, block19)) {
    reset();
  } else if (rectCollide(player1, block20)) {
    reset();
  } else if (rectCollide(player1, block21)) {
    reset();
  } else if (rectCollide(player1, block22)) {
    reset();
  } else if (rectCollide(player1, block23)) {
    reset();
  } else if (rectCollide(player1, block24)) {
    reset();
  } else if (rectCollide(player1, block25)) {
    reset();
  } else if (rectCollide(player1, block26)) {
    reset();
  } else if (rectCollide(player1, block27)) {
    reset();
  } else if (rectCollide(player1, block28)) {
    reset();
  } else if (rectCollide(player1, block29)) {
    reset();
  } else if (rectCollide(player1, block30)) {
    reset();
  } else if (rectCollide(player1, block32)) {
    reset();
  } else if (rectCollide(player1, block33)) {
    reset();
  } else if (rectCollide(player1, block37)) {
    reset();
  } else if (rectCollide(player1, block38)) {
    reset();
  } else if (rectCollide(player1, block40)) {
    reset();
  } else if (rectCollide(player1, block42)) {
    reset();
  } else if (rectCollide(player1, block44)) {
    lastreset();
  } else if (rectCollide(player1, end)) {
    // Clear all key presses to stop movement after alert
    keyPressed = {};
    alert("Congratulations! You win!");
    player1.x = 80;
    player1.y = 250;
  }

  if (rectCollide(player1, block31)) {
    block22.color = "grey";
  } else {
    block22.color = "white";
  }

  if (rectCollide(player1, block34)) {
    block33.color = "grey";
  } else {
    block33.color = "white";
  }

  if (rectCollide(player1, block35)) {
    block30.color = "grey";
  } else {
    block30.color = "white";
  }

  if (rectCollide(player1, block36)) {
    block32.color = "grey";
  } else {
    block32.color = "white";
  }

  if (rectCollide(player1, block39)) {
    block38.color = "grey";
  } else {
    block38.color = "white";
  }

  if (rectCollide(player1, block41)) {
    block40.color = "grey";
  } else {
    block40.color = "white";
  }

  if (rectCollide(player1, block43)) {
    block42.color = "grey";
  } else {
    block42.color = "white";
  }

  if (rectCollide(player1, block45)) {
    block44.color = "grey";
  } else {
    block44.color = "white";
  }

  // DRAWING
  if (flag) {
    drawFrame();

    requestAnimationFrame(draw);
  }
}

function drawFrame() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Block
  ctx.fillStyle = block1.color;
  ctx.fillRect(block1.x, block1.y, block1.w, block1.h);
  ctx.fillStyle = block2.color;
  ctx.fillRect(block2.x, block2.y, block2.w, block2.h);
  ctx.fillStyle = block3.color;
  ctx.fillRect(block3.x, block3.y, block3.w, block3.h);
  ctx.fillStyle = block4.color;
  ctx.fillRect(block4.x, block4.y, block4.w, block4.h);
  ctx.fillStyle = block5.color;
  ctx.fillRect(block5.x, block5.y, block5.w, block5.h);
  ctx.fillStyle = block6.color;
  ctx.fillRect(block6.x, block6.y, block6.w, block6.h);
  ctx.fillStyle = block7.color;
  ctx.fillRect(block7.x, block7.y, block7.w, block7.h);
  ctx.fillStyle = block8.color;
  ctx.fillRect(block8.x, block8.y, block8.w, block8.h);
  ctx.fillStyle = block9.color;
  ctx.fillRect(block9.x, block9.y, block9.w, block9.h);
  ctx.fillStyle = block10.color;
  ctx.fillRect(block10.x, block10.y, block10.w, block10.h);
  ctx.fillStyle = block11.color;
  ctx.fillRect(block11.x, block11.y, block11.w, block11.h);
  ctx.fillStyle = block12.color;
  ctx.fillRect(block12.x, block12.y, block12.w, block12.h);
  ctx.fillStyle = block13.color;
  ctx.fillRect(block13.x, block13.y, block13.w, block13.h);
  ctx.fillStyle = block14.color;
  ctx.fillRect(block14.x, block14.y, block14.w, block14.h);
  ctx.fillStyle = block15.color;
  ctx.fillRect(block15.x, block15.y, block15.w, block15.h);
  ctx.fillStyle = block16.color;
  ctx.fillRect(block16.x, block16.y, block16.w, block16.h);
  ctx.fillStyle = block17.color;
  ctx.fillRect(block17.x, block17.y, block17.w, block17.h);
  ctx.fillStyle = block18.color;
  ctx.fillRect(block18.x, block18.y, block18.w, block18.h);
  ctx.fillStyle = block19.color;
  ctx.fillRect(block19.x, block19.y, block19.w, block19.h);
  ctx.fillStyle = block20.color;
  ctx.fillRect(block20.x, block20.y, block20.w, block20.h);
  ctx.fillStyle = block21.color;
  ctx.fillRect(block21.x, block21.y, block21.w, block21.h);
  ctx.fillStyle = block22.color;
  ctx.fillRect(block22.x, block22.y, block22.w, block22.h);
  ctx.fillStyle = block23.color;
  ctx.fillRect(block23.x, block23.y, block23.w, block23.h);
  ctx.fillStyle = block24.color;
  ctx.fillRect(block24.x, block24.y, block24.w, block24.h);
  ctx.fillStyle = block25.color;
  ctx.fillRect(block25.x, block25.y, block25.w, block25.h);
  ctx.fillStyle = block26.color;
  ctx.fillRect(block26.x, block26.y, block26.w, block26.h);
  ctx.fillStyle = block27.color;
  ctx.fillRect(block27.x, block27.y, block27.w, block27.h);
  ctx.fillStyle = block28.color;
  ctx.fillRect(block28.x, block28.y, block28.w, block28.h);
  ctx.fillStyle = block29.color;
  ctx.fillRect(block29.x, block29.y, block29.w, block29.h);
  ctx.fillStyle = block30.color;
  ctx.fillRect(block30.x, block30.y, block30.w, block30.h);
  ctx.fillStyle = block31.color;
  ctx.fillRect(block31.x, block31.y, block31.w, block31.h);
  ctx.fillStyle = block32.color;
  ctx.fillRect(block32.x, block32.y, block32.w, block32.h);
  ctx.fillStyle = block33.color;
  ctx.fillRect(block33.x, block33.y, block33.w, block33.h);
  ctx.fillStyle = block34.color;
  ctx.fillRect(block34.x, block34.y, block34.w, block34.h);
  ctx.fillStyle = block35.color;
  ctx.fillRect(block35.x, block35.y, block35.w, block35.h);
  ctx.fillStyle = block36.color;
  ctx.fillRect(block36.x, block36.y, block36.w, block36.h);
  ctx.fillStyle = block37.color;
  ctx.fillRect(block37.x, block37.y, block37.w, block37.h);
  ctx.fillStyle = block38.color;
  ctx.fillRect(block38.x, block38.y, block38.w, block38.h);
  ctx.fillStyle = block39.color;
  ctx.fillRect(block39.x, block39.y, block39.w, block39.h);
  ctx.fillStyle = block40.color;
  ctx.fillRect(block40.x, block40.y, block40.w, block40.h);
  ctx.fillStyle = block41.color;
  ctx.fillRect(block41.x, block41.y, block41.w, block41.h);
  ctx.fillStyle = block42.color;
  ctx.fillRect(block42.x, block42.y, block42.w, block42.h);
  ctx.fillStyle = block43.color;
  ctx.fillRect(block43.x, block43.y, block43.w, block43.h);
  ctx.fillStyle = block44.color;
  ctx.fillRect(block44.x, block44.y, block44.w, block44.h);
  ctx.fillStyle = block45.color;
  ctx.fillRect(block45.x, block45.y, block45.w, block45.h);
  ctx.fillStyle = end.color;
  ctx.fillRect(end.x, end.y, end.w, end.h);

  // Draw Player 1 (Blue Rectangle)
  ctx.fillStyle = player1.color;
  ctx.fillRect(player1.x, player1.y, player1.w, player1.h);

  // Last message

  drawVerticalText(ctx, "Do you think there are any hidden blocks?", 740, 60);

  // Draw Mouse Coordinates
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`(${mouseX}, ${mouseY})`, mouseX, mouseY);
}
