const getAllSongs = (req, res) => {
  res.json({ status: "all songs gotten" });
};
const getOneSong = (req, res) => {
  res.json({ status: `one song gotten with title: ${req.params.title}` });
};
const createSong = (req, res) => {
  res.json({ status: `one song created with title: ${req.body.title}` });
};
const updateSong = (req, res) => {
  res.json({ status: `one song updated with title: ${req.params.title}` });
};
const deleteSong = (req, res) => {
  res.json({ status: `one song deleted with title: ${req.params.title}` });
};

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  updateSong,
  deleteSong,
};
