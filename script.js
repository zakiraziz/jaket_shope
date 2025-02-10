document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Shopping Cart
    let cartCount = 0;
    const cartBtn = document.getElementById("cartBtn");
    const cartCountDisplay = document.getElementById("cartCount");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
            alert("Item added to cart!");
        });
    });

    // Smooth Scroll
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Live Chat Button
    const liveChatBtn = document.getElementById("liveChat");
    liveChatBtn.addEventListener("click", function () {
        alert("Live chat is currently unavailable. Please email support@jacketshop.com");
    });
});
