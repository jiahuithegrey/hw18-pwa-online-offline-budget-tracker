const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema();

const Budget = mongoose.model("BUdget", BudgetSchema);
module.export = Budget;