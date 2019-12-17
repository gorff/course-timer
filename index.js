// Get current date
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
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

// Percent done section
document.getElementById("percentDone").addEventListener("change", function() {
  var percentCompleted = document.getElementById("percentDone").value;
  const diffDays = document.getElementById("daysLeft").innerHTML // need to redefine, as its initially declared inside another function as a local var
  amountEachDay = (100 - percentCompleted) / diffDays;

  console.log("% completed logged")

  document.getElementById("amountPerDay").innerHTML = Math.round(amountEachDay * 100) / 100 + '%';
});

// Amount to be completed by a specified date section
document.getElementById("futureDate").addEventListener("change", function() {
  // Get values from previous results
  var percentCompleted = parseFloat(document.getElementById("percentDone").value);
  var amountEachDay =  parseFloat(document.getElementById("amountPerDay").innerHTML.replace('%',  ''));
  var currentDate = new Date(date);
  var futureDate = new Date(document.getElementById("futureDate").value);
  // EQUATION:
  // amount done by date = amountCompleted + %perDay * (futureDate - currentDate)
  const diffTime = Math.abs(futureDate - currentDate);
  const futureDiffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  var futureAmount = Math.round((percentCompleted + futureDiffDays*amountEachDay)*100)/100;

  // Display result
  document.getElementById("futureValue").innerHTML = futureAmount + '%';
});
