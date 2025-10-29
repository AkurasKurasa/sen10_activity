 // Pop-up on load (annoying)
    window.onload = function() {
        alert("🎨 Welcome to my ugly but interactive gallery!");
    };

    // Theme switcher
    const btn = document.querySelector(".theme-toggle");
    const themes = [
        {bg: "#fdf6f0", text: "#333"},
        {bg: "#000", text: "#ff99ff"},
        {bg: "#ccffcc", text: "#003366"},
        {bg: "#ffef96", text: "#990000"},
    ];
    let currentTheme = 0;

    btn.addEventListener("click", () => {
        currentTheme = (currentTheme + 1) % themes.length;
        document.body.style.backgroundColor = themes[currentTheme].bg;
        document.body.style.color = themes[currentTheme].text;
        alert("Theme changed! Hope it’s better (it’s probably not).");
    });

    // Hover sound effect
    const hoverSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
    document.querySelectorAll(".photo").forEach(photo => {
        photo.addEventListener("mouseenter", () => hoverSound.play());
    });

    // Basic form validation
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields. Don’t be shy!");
            return;
        }

        alert(`Thanks ${name}! Your message has been sent into the void.`);
        form.reset();
    });
