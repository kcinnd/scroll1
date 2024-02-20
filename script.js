document.getElementById('scrollContainer').addEventListener('click', function() {
    var scroll = document.getElementById('scroll');
    var riddle = document.getElementById('riddle');

    // Toggle scroll state
    scroll.classList.toggle('rolled');
    scroll.classList.toggle('unrolled');

    // Toggle riddle visibility based on scroll state
    if (scroll.classList.contains('unrolled')) {
        riddle.classList.add('unravel');
    } else {
        riddle.classList.remove('unravel');
    }
});
