var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "15px Arial";
ctx.lineWidth = 1.2;
ctx.strokeStyle = "white";
ctx.strokeText("Lakh Tonnes", 40, 20);
ctx.strokeText("700  -", 0, 20);
ctx.strokeText("600  -", 0, 70);
ctx.strokeText("500  -", 0, 120);
ctx.strokeText("400  -", 0, 170);
ctx.strokeText("300  -", 0, 220);
ctx.strokeText("200  -", 0, 270);
ctx.strokeText("100  -", 0, 320);
ctx.strokeText("0      -", 0, 370);
ctx.moveTo(30, 400);
ctx.lineTo(30, 0);
ctx.moveTo(0, 370);
ctx.lineTo(500, 370);
ctx.strokeText("|", 80, 380);
ctx.strokeText("2001", 85, 390);
ctx.strokeText("|", 130, 380);
ctx.strokeText("2002", 135, 390);
ctx.strokeText("|", 180, 380);
ctx.strokeText("2003", 185, 390);
ctx.strokeText("|", 230, 380);
ctx.strokeText("2004", 235, 390);
ctx.strokeText("|", 280, 380);
ctx.strokeText("2005", 285, 390);
ctx.strokeText("|", 330, 380);
ctx.strokeText("2006", 335, 390);
ctx.strokeText("|", 380, 380);
ctx.strokeText("2007", 385, 390);
ctx.moveTo(80, 230); //(2001, 281)
ctx.lineTo(130, 235);
ctx.moveTo(130, 235); //(2002, 277)
ctx.lineTo(180, 240);
ctx.moveTo(180, 240); //(2003, 275)
ctx.lineTo(230, 140);
ctx.moveTo(230, 140); //(2004, 457)
ctx.lineTo(280, 270);
ctx.moveTo(280, 270); //(2005, 200)
ctx.lineTo(330, 230);
ctx.moveTo(330, 230); //(2006, 280)
ctx.lineTo(380, 290); //(2007, 150)
ctx.stroke();
