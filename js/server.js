const mongoose = require("mongoose");

// Define schemas for each table
const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  work: String,
});

const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  college: String,
});

const speakerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  about: String,
  photo: String,
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);
const Speaker = mongoose.model("Speaker", speakerSchema);

// Connect to MongoDB
mongoose.connect("mongodb+srv://pilot:tIiRozJfYqT6iZPc@cluster0.gjfxw1c.mongodb.net/IT-LIVE?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function openForm(evt, formName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].classList.remove("active");
  }
  document.getElementById(formName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var data = {};
  for (var [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log(data);
  event.target.reset();

  // Save data to MongoDB based on which section was submitted
  if (event.target.id === "volunteer-form") {
    const volunteer = new Volunteer(data);
    volunteer.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Volunteer saved successfully");
      }
    });
  } else if (event.target.id === "visitor-form") {
    const visitor = new Visitor(data);
    visitor.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Visitor saved successfully");
      }
    });
  } else if (event.target.id === "speaker-form") {
    const speaker = new Speaker(data);
    speaker.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Speaker saved successfully");
      }
    });
  }
});

/* -----------------   collections    ---------------- */

// Require the MongoDB driver
// const MongoClient = require('mongodb').MongoClient;

// // Connection URL and database name
// const url = 'mongodb+srv://pilot:tIiRozJfYqT6iZPc@cluster0.gjfxw1c.mongodb.net/IT-LIVE?retryWrites=true&w=majority';
// const dbName = 'IT-LIVE';

// // Create a MongoClient instance
// const client = new MongoClient(url);

// // Connect to the MongoDB server
// client.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected successfully to server');

//   // Get a reference to the database
//   const db = client.db(dbName);

//   // Create the collections for each section of the registration form
//   db.createCollection('volunteers', function(err, res) {
//     if (err) throw err;
//     console.log('Volunteers collection created');
//   });

//   db.createCollection('visitors', function(err, res) {
//     if (err) throw err;
//     console.log('Visitors collection created');
//   });

//   db.createCollection('speakers', function(err, res) {
//     if (err) throw err;
//     console.log('Speakers collection created');
//   });

//   // Close the database connection
//   client.close();
// });
