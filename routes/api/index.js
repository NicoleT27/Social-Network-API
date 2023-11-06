const router = require("express").Router();
const userRoutes = require("./userRoutes");
const reactionRoutes = require("./reactionRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const friendRoutes = require("./friendRoutes");

router.use("/user", userRoutes);
router.use("/reaction", reactionRoutes);
router.use("/thought", thoughtRoutes);
router.use("/friend", friendRoutes);

module.exports = router;
