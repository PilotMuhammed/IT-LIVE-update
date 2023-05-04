const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://pilot:NCVF8SKwMYgixqnW@cluster0.gfowif6.mongodb.net/IT_LIVE?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  college: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model("User", userSchema);
const app = express();
app.use(express.static("./public"));

// Start the server
app.listen(5050, () => {
  console.log("Server started on port 5050");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const { name, email, phone, college, userType } = req.body;
  console.log(college, "college");
  const user = new User({ name, email, phone, college, userType });

  user
    .save()
    .then(() => {
      res.redirect("sccuss.html");
      // res.send("User created");
      console.log("done!");
    })
    .catch((error) => {
      console.log("not yet!");
      res.redirect("Error.html");

      res.status(400).send(`Error creating user: ${error.message}`);
    });
});

// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const bodyParser = require("body-parser");
// const app = express();

// // Connection URL and database name
// const url =
//   "mongodb+srv://pilot:NCVF8SKwMYgixqnW@cluster0.gfowif6.mongodb.net/IT_LIVE?retryWrites=true&w=majority";
// const dbName = "IT_LIVE";

// // Use middleware to parse JSON and URL-encoded form data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML file
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/register.html");
// });

// // Handle form submissions
// app.post("/submit", function (req, res) {
//   // Get the data from the form
//   const section = req.body.section;
//   const name = req.body.name;
//   const email = req.body.email;
//   const phone = req.body.phone;
//   const college = req.body.college;
//   const subject = req.body.subject;
//   const about = req.body.about;
//   const photo = req.body.photo;

//   // Connect to the MongoDB server and insert the data into the appropriate collection
//   MongoClient.connect(url, function (err, client) {
//     if (err) throw err;
//     const db = client.db(dbName);

//     // Insert the data into the appropriate collection based on the section of the form
//     if (section === "volunteers") {
//       const collection = db.collection("volunteers");
//       collection.insertOne(
//         {
//           name: name,
//           email: email,
//           phone: phone,
//           work: req.body.work,
//         },
//         function (err, result) {
//           if (err) throw err;
//           console.log("Inserted document into the volunteers collection");
//           client.close();
//           res.redirect("/");
//         }
//       );
//     } else if (section === "visitors") {
//       const collection = db.collection("visitors");
//       collection.insertOne(
//         {
//           name: name,
//           email: email,
//           phone: phone,
//           college: college,
//         },
//         function (err, result) {
//           if (err) throw err;
//           console.log("Inserted document into the visitors collection");
//           client.close();
//           res.redirect("/");
//         }
//       );
//     } else if (section === "speakers") {
//       const collection = db.collection("speakers");
//       collection.insertOne(
//         {
//           name: name,
//           email: email,
//           phone: phone,
//           subject: subject,
//           about: about,
//           photo: photo,
//         },
//         function (err, result) {
//           if (err) throw err;
//           console.log("Inserted document into the speakers collection");
//           client.close();
//           res.redirect("/");
//         }
//       );
//     }
//   });
// });

// // Start the server
// app.listen(3000, function () {
//   console.log("Server started on port 3000");
// });
