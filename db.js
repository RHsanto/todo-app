const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://RHsanto:ilBEMCKF0Bv5GZw7@mr-travel-app.aqkf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connection successful"))
  .catch(err => console.log(err.message));
// Create a schema for your data
const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  website: String,
  // Add other fields as needed
});

// Create a model based on the schema
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
