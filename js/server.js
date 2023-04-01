const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();

// Connection URL and database name
const url = "mongodb+srv://pilot:tIiRozJfYqT6iZPc@cluster0.gjfxw1c.mongodb.net/IT-LIVE?retryWrites=true&w=majority";
const dbName = "IT-LIVE";

// Use middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});

// Handle form submissions
app.post("/submit", function (req, res) {
  // Get the data from the form
  const section = req.body.section;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const college = req.body.college;
  const subject = req.body.subject;
  const about = req.body.about;
  const photo = req.body.photo;

  // Connect to the MongoDB server and insert the data into the appropriate collection
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    const db = client.db(dbName);

    // Insert the data into the appropriate collection based on the section of the form
    if (section === "volunteers") {
      const collection = db.collection("volunteers");
      collection.insertOne(
        {
          name: name,
          email: email,
          phone: phone,
          work: req.body.work,
        },
        function (err, result) {
          if (err) throw err;
          console.log("Inserted document into the volunteers collection");
          client.close();
          res.redirect("/");
        }
      );
    } else if (section === "visitors") {
      const collection = db.collection("visitors");
      collection.insertOne(
        {
          name: name,
          email: email,
          phone: phone,
          college: college,
        },
        function (err, result) {
          if (err) throw err;
          console.log("Inserted document into the visitors collection");
          client.close();
          res.redirect("/");
        }
      );
    } else if (section === "speakers") {
      const collection = db.collection("speakers");
      collection.insertOne(
        {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          about: about,
          photo: photo,
        },
        function (err, result) {
          if (err) throw err;
          console.log("Inserted document into the speakers collection");
          client.close();
          res.redirect("/");
        }
      );
    }
  });
});

// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
