const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
      required: [true, "Amount is required."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
    },
    reference: {
      typeof: String,
    },
    description: {
      typeof: String,
      required: [true, "Description is required."],
    },
    date: {
      type: String,
      required: [true, "Data is required."],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
