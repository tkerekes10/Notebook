// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is currently running on port http://localhost:${PORT}`);
});

//Static Resources
app.use(express.static("./public"));

require("./routes/viewRoutes")(app);
require("./routes/apiRoutes")(app);

// app.get("/api/notes", (req, res) => {
//   res.send("Suceesfully sent the note data");
// });
