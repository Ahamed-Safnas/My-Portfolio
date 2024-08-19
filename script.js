function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;

        if (content.style.display === "none" || !content.style.display) {
            content.style.display = "block";
            button.textContent = "Read Less ↑";
        } else {
            content.style.display = "none";
            button.textContent = "Read More ↓";
        }
    });
});
