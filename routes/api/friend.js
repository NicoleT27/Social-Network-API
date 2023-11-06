const router = require("express").Router();

// add a new friend to a users firend list
router.post("/api/users/:userId/friends/:friendId", async (req, res) => {});

// remove a friend from a users friend list
router.delete("/api/users/:userId/friends/:friendId", async (req, res) => {});

module.exports = router;
