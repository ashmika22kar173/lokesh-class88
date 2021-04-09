var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeigth(120);
        player_object.set({
            top: player_y,
            player_x

        });
        canvas.add(player_object);
    });


}

function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeigth(block_height);
        block_object.set({
            top: player_y,
            player_x

        });
        canvas.add(block_object);
    });


}

window.addEventListener("keydown", lokesh);

function lokesh(e) {
    var keydown = e.keyCode;
    console.log(keydown);
    if (keydown == '84') {
        newimage("trunk.jpg");
        console.log("t");

    }

    if (keydown == '68') {
        newimage("dark_green.png");
        console.log("d");

    }

    if (keydown == '76') {
        newimage("light_green.png");
        console.log("l");

    }

    if (keydown == '71') {
        newimage("ground.png");
        console.log("g");

    }

    if (keydown == '87') {
        newimage("wall.jpg");
        console.log("w");

    }

    if (keydown == '89') {
        newimage("yellow_wall.png");
        console.log("y");

    }

    if (keydown == '82') {
        newimage("roof.jpg");
        console.log("r");

    }

    if (keydown == '67') {
        newimage("cloud.jpg");
        console.log("c");

    }

    if (keydown == '85') {
        newimage("unique.png");
        console.log("u");

    }

    if (keydown == '80' && e.shiftkey == true) {
        block_width = block_width + 10;
        block_height = block_height + 10;
        console.log("shift & p presse");
        document.getElementById("current-width").innerHTML = block_width;
        document.getElementById("current-height").innerHTML = block_height;
    }

    if (keydown == '77' && e.shiftkey == true) {
        block_width = block_width - 10;
        block_height = block_height - 10;
        console.log("shift & m presse");
        document.getElementById("current-width").innerHTML = block_width;
        document.getElementById("current-height").innerHTML = block_height;
    }

    if (keydown == '38') {
        up();
        console.log("up");

    }

    if (keydown == '40') {
        down();
        console.log("down");

    }

    if (keydown == '37') {
        left();
        console.log("left");

    }

    if (keydown == '39') {
        right();
        console.log("right");

    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block image height =" + block_height);
        console.log("When up arrow key is pressed, X = " + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function down() {
    if (player_y <= 470) {
        player_y = player_y - block_height;
        console.log("block image height =" + block_height);
        console.log("When down arrow key is pressed, X = " + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block image height =" - block_width);
        console.log("When left arrow key is pressed, X = " + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function right() {
    if (player_x <= 900) {
        player_x = player_x + block_width;
        console.log("block image height =" + block_width);
        console.log("When right arrow key is pressed, X = " + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}