const router = require("express").Router();
const { userSchema } = require("../../models/user");
// get all users 
router.get("/api/users", async (req, res) => {

});
// get one user by id
router.get("/api/users", async (req, res) => {});

// post a new user
router.post("/api/users", async (req, res) => {});

// update user by id
router.put("/api/users", async (req, res) => {});

// delete user by id
router.delete("/api/users", async (req, res) => {});



module.exports = router;
