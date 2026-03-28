function drawVerticalText(ctx, text, x, y) {
  ctx.save();

  ctx.font = "28px Arial";
  ctx.fillStyle = "red";

  // Draw as a normal horizontal text line rotated 90 degrees CCW with the bottom of the text at the point (x, y).
  ctx.textBaseline = "bottom"; // y is bottom edge of rotated text
  ctx.textAlign = "left"; // x is left edge after rotation

  ctx.translate(x, y);
  ctx.rotate(Math.PI / 2); // rotate 90° clockwise so bottom aligns left
  ctx.fillText(text, 0, 0);

  ctx.restore();
}
