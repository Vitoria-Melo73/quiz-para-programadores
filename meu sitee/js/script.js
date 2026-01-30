const botaoTema = document.getElementById("toggleTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

