function showCategory(category) {
    const buttons = document.querySelectorAll(".badge-category");
    const groups = document.querySelectorAll(".skill-group");

    buttons.forEach(btn => {
        btn.classList.toggle("active", btn.textContent.trim() === category);
    });

    groups.forEach(group => {
        group.style.display = (group.dataset.category === category) ? "flex" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showCategory("Languages");

    // Auto-close mobile navbar when a nav-link is clicked
    const links = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar-collapse");

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navbar.classList.contains("show")) {
                navbar.classList.remove("show");
            }
        });
    });
});
