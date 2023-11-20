window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});

document.querySelectorAll('.portfolio-video').forEach(video => {
    video.addEventListener('mouseover', function() {
        this.play();
    });

    video.addEventListener('mouseout', function() {
        this.pause();
    });
});
