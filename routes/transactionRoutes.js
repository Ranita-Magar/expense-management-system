const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/TransactionController");

//router object
const router = express.Router();

//routes
//add transaction Post method
router.post("/add-transaction", addTransaction);

//get transaction
router.get("/get-transaction", getAllTransaction);

module.exports = router;
