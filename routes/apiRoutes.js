const notesData = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  app.post("/api/notes", (req, res) => {
    const note = req.body;
    note.id = notesData.length + 1;
    notesData.push(note);
    res.json(true);
  });

  app.delete("/api/notes/:id", (req, res) => {
    console.log(`We are going to be deleting note id = ${req.params.id}`);

    const deletedNote = notesData.indexOf(req.params.id);

    if (deletedNote === notesData.id) {
      notesData.splice(deletedNote, 1);
    }

    res.json(true);
  });
};
