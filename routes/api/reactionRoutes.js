const router = require("express").Router();
const { reactionSchema } = require("../../models/reaction");

// create a reaction stored in a single thoughts reactions array field
router.post("/api/thoughts/:thoughtId/reactions", async (req, res) => {});

// pull and remove a reaction by the reactions reactionid value
router.delete("/api/thoughts/:thoughtId/reactions", async (req, res) => {});


module.exports = router;
