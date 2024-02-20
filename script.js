// Listen for a click event on the scroll element
document.getElementById('scroll').addEventListener('click', function() {
    // Get the riddle element
    var riddle = document.getElementById('riddle');
    
    // Toggle the 'unravel' class to show or hide the riddle text
    riddle.classList.toggle('unravel');
});
