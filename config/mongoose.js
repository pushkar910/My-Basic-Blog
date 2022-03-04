// //Getting the mongoose
// const mongoose = require("mongoose");

// //Connecting to the database
// mongoose.connect("mongodb://localhost:27017/shopDB", { useNewUrlParser: true });

// //Creating a new schema for database
// const shopSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: Number,
//   qty: Number,
//   review: String,
// });

// //Creating a new collection for schema
// const Shop = mongoose.model("Shop", shopSchema);

// //Adding an item in the collection
// const Pen = new Shop({
//   name: "Pen",
//   price: 20,
//   qty: 12,
//   review: "Works Perfect",
// });

// const Pencil = new Shop({
//   name: "Pencil",
//   price: 8,
//   qty: 20,
//   review: "Nice Led",
// });

// const JavaBook = new Shop({
//   name: "Java Book",
//   price: 200,
//   qty: 10,
//   review: "Too heavy for Weak",
// });

// //Saving the item in database
// item.save(); //Remember to comment it out when saving another items in database otherwise it will again save a new item in database.

// //Finding an Item in database
// Shop.find(function (err, shops) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     shops.forEach(function (item) {
//       console.log(item.name);
//     });
//   }
// });

// //Deleting an Item
// Shop.deleteOne({ name: "Pen" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully Deleted");
//   }
// });

// //Creating new schema and establishing a relation with another existing schema

// const customerSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   itemBought: shopSchema,
// });

// const Customer = mongoose.model("Customer", customerSchema);

// const cust1 = new Customer({
//   name: "Ammy",
//   age: 23,
//   itemBought: Pen,
// });
