const router = require("express").Router();
const { reactionSchema } = require("../../models");

router.post("/api/thoughts/:thoughtId/reactions", async (req, res) => {});

router.delete("/api/thoughts/:thoughtId/reactions", async (req, res) => {});


module.exports = router;
