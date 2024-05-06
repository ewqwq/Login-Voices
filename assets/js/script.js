document.addEventListener("DOMContentLoaded", function () {
    var images = ["bg.png", "bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png", "bg6.png", "bg7.png", "bg8.png", "bg9.png"];
    var loadedImages = [];

    images.forEach(function (imageSrc) {
        var img = new Image();
        img.onload = function () {
            loadedImages.push(img);
        };
        img.src = "./assets/img/" + imageSrc;
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var bgElement = document.getElementById("bg");

    function changeBackground() {
        var randomIndex = getRandomInt(0, loadedImages.length - 1);
        var randomImage = loadedImages[randomIndex];
        bgElement.style.backgroundImage = "url('" + randomImage.src + "')";
    }

    window.onload = function () {
        changeBackground();
    };

    setInterval(function () {
        changeBackground();
    }, 10000);
});

var passwordInput = document.getElementById("password-input");
var eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function () {
    // Если тип поля ввода - "password", то меняем на "text"
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        // Меняем иконку на открытый глаз
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        // Если тип поля ввода - "text", то меняем на "password"
        passwordInput.type = "password";
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
});