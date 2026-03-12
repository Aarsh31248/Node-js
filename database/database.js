const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://Aarsh:Dr6A4mnKBAnmLTBL@aarshnode.rmee4fl.mongodb.net/";

const client = new MongoClient(url);

const dbName = "test";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // Find
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Insert
  const data = {
    firstName: "Virat",
    lastName: "Kohli",
    age: "38",
    city: "London",
  };
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  // Update
  //   const updateResult = await collection.updateOne(
  //     { lastName: "Kohli" },
  //     { $set: { lastName: "Singh" } },
  //   );
  //   console.log("Updated documents =>", updateResult);

  // Delete
  //   const deleteResult = await collection.deleteMany({
  //     firstName: "Virat",
  //   });
  //   console.log("Deleted documents =>", deleteResult);

  // Count
  const count = await collection.countDocuments({});
  console.log("Count is: ", count);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
