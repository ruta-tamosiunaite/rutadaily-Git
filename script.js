function showMessage() {
    alert("+33 6 16 31 99 96");
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Adjust the 100 value as needed
        navbar.style.backgroundColor = '#555'; // New background color on scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Back to transparent
    }
});