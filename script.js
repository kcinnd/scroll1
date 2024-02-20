document.getElementById('scroll').addEventListener('click', function() {
    var riddle = document.getElementById('riddle');
    riddle.classList.toggle('unravel');
    document.getElementById('answer').textContent = calculateRiddle();
});

function calculateRiddle() {
    // Riddle logic
    let fingers = 10;
    let primaryColors = 3;
    let rushmoreFaces = 4;
    let olympicRings = 5;
    let continents = 7;
    let daysInWeek = 7;
    let centuryYears = 100;
    let alphabetLetters = 26;

    let result = (((((fingers - primaryColors) * rushmoreFaces + olympicRings) * 2 + continents) * (daysInWeek + 1) - 4) + centuryYears) - (alphabetLetters - 1);
    return result;
}
