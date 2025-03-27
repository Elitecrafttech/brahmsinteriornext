console.log("Heavy script loaded.");

// Example: Lazy-loading images to improve performance
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img[data-src]").forEach((img) => {
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
    });
});
