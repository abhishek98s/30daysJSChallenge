function timeRemaining() {
    time = prompt("Enter your current age:");
    var yearsRemaining = 100 - time;
    var daysRemaining = yearsRemaining * 365;
    var weeksRemaining = yearsRemaining * 52;
    var monthsRemaining = yearsRemaining * 12;

    alert("You have " + yearsRemaining + " years or " + monthsRemaining + " months or " + weeksRemaining + " weeks or " + daysRemaining +" days remaining");
}