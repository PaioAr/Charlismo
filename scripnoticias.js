document.querySelectorAll("#no-programar").forEach(item => {
    item.addEventListener("mouseover", function() {
        this.dataset.originalText = this.innerText; // Guarda el texto original
        this.innerText = "No voy a programar esto";
    });

    item.addEventListener("mouseout", function() {
        this.innerText = this.dataset.originalText; // Restaura el texto original
    });
});
