

// Get current date

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var dueDate = document.getElementById("daysLeft").innerHTML;

// Listen for a change in the date input
document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date(input);
    var currentDate = new Date(date);

    const diffTime = Math.abs(dateEntered - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    var daysLeft = dateEntered - currentDate;

    // Set the output text to show the days left
    document.getElementById("daysLeft").innerHTML = diffDays;
});
  document.getElementById("percentDone").addEventListener("change", function() {

    // Percent done section
    var percentCompleted = document.getElementById("percentDone").value;
    const diffDays = document.getElementById("daysLeft").innerHTML // need to redefine, as its initially declared inside another function as a local var
    amountEachDay = (100 - percentCompleted)/ diffDays;

    console.log("% completed logged")

    document.getElementById("amountPerDay").innerHTML = Math.round(amountEachDay*100)/100 +'%';



});
