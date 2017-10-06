
  var config = {
    apiKey: "AIzaSyDx5MQKhrdxkahtQK1Cnd_2w60PEeVSgpk",
    authDomain: "week-7-homework-454e0.firebaseapp.com",
    databaseURL: "https://week-7-homework-454e0.firebaseio.com",
    projectId: "week-7-homework-454e0",
    storageBucket: "week-7-homework-454e0.appspot.com",
    messagingSenderId: "437004037928"
  };

  firebase.initializeApp(config);

  var trainStartDesiplay;

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainStart = moment($("#start-input").val().trim(), "HH:MM").format("X");
    var trainRate = $("#frequency-input").val().trim();

    var newTrain = {
      name: trainName,
      dest: trainDest,
      start: trainStart,
      rate: trainRate
    };

    console.log(newTrain)

    // Uploads employee data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.start);
    console.log(newTrain.rate);

    // Alert
    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");

});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().dest;
  var trainStart = childSnapshot.val().start;
  var trainRate = childSnapshot.val().rate;

  // Employee Info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainStart);
  console.log(trainRate);

  // Train Time
  trainStartDesiplay = moment.unix(trainStart).format("HH:MM");

  // Calculate the months worked using hardcore math
  // To calculate the months worked

  // Calculate the total billed rate
  // var empBilled = empMonths * trainRate;
  // console.log(empBilled);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
  trainStartDisplay + "</td><td>" + empMonths + "</td><td>" + trainRate + "</td><td>" + empBilled + "</td></tr>");
});