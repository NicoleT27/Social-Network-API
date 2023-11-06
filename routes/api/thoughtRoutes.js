const router = require("express").Router();
const { thoughtSchema } = require("../../models/thought");

// get all thoughts
router.get("/api/users/:userId/friends/:friendId", async (req, res) => {});

// get a single thought by id
router.get("/api/users/:userId/friends/:friendId", async (req, res) => {});

// create a new thought  (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post("/api/users/:userId/friends/:friendId", async (req, res) => {});

// update a thought by id
router.put("/api/users/:userId/friends/:friendId", async (req, res) => {});

// remove thought by id
router.delete("/api/users/:userId/friends/:friendId", async (req, res) => {});


module.exports = router;
