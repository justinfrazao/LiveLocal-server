const express = require("express");
const router = new express.Router();
const { createGameDatabase, gameInDatabase, doesRoomExist } = require('../data/liveGameService');
  
// This creates a lobby, not a game instance
router.post('/create', async (req, res) => {
  var roomCode;
  do {
    roomCode = '';
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 4; i++) {
      roomCode += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
  } while (gameInDatabase(roomCode));
  //above should search database for code
  res.send(await createGameDatabase(roomCode));
});

module.exports = router;