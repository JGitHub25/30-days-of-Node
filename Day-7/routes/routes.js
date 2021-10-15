const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../controllers/songsControllers");

router.get("/", getAllSongs);
router.get("/:title", getOneSong);
router.post("/", createSong);
router.patch("/:title", updateSong);
router.delete("/:title", deleteSong);

module.exports = router;
