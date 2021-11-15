canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_images_group = ["Map_1.png", "Map_2.png"];
random_num = Math.floor(Math.random()*2);
Background_final_image = background_images_group[random_num];
user_img = "User.png";
user_x = 200;
user_y = 200;
user_height = 30;
user_width = 30;

function add() {
    bg_image = new Image();
    bg_image.onload = uploadBg;
    bg_image.src = Background_final_image;
    user_image = new Image();
    user_image.onload = uploadUser;
    user_image.src = user_img;
}

function uploadBg() {
    ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);
}

function uploadUser() {
    ctx.drawImage(user_image, user_x, user_y, user_width, user_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        up();
    }
    if (keypressed == "40") {
        down();
    }
    if (keypressed == "37") {
        left();
    }
    if (keypressed == "39") {
        right();
    }
}

function up() {
    if (user_y >= 0) {
        user_y = user_y - 3;
        uploadBg()
        uploadUser()
    }
}
function down() {
    if (user_y <= 510) {
        user_y = user_y + 3;
        uploadBg()
        uploadUser()
    }
}
function left() {
    if (user_x >= 0) {
        user_x = user_x - 3;
        uploadBg()
        uploadUser()
    }
}
function right() {
    if (user_x <= 540) {
        user_x = user_x + 3;
        uploadBg()
        uploadUser()
    }
}