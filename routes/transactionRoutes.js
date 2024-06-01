const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/TransactionController");

//router object
const router = express.Router();

//routes
//add transaction Post method
router.post("/add-transaction", addTransaction);

//edit transaction Post method
router.post("/edit-transaction", editTransaction);

//delete transaction Post method
router.post("/delete-transaction", deleteTransaction);

//get transaction
router.post("/get-transaction", getAllTransaction);

module.exports = router;
