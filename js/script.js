// Efek navbar saat scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.style.background =
        window.scrollY > 50 ? "#a89780" : "transparent";
});

// Alert sambutan
window.onload = () => {
    console.log("Selamat datang di Portofolio Rosa Natasya");
};
