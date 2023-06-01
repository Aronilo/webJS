const { ObjectId } = require("mongodb");
const connectToMongoDB = require("../configs/mongodb.config");

let db;

connectToMongoDB()
  .then((result) => {
    db = result;
  })
  .catch((err) => console.log(err));

console.log(db);

async function insertComment(data) {
  const comments = db.collection("comments");
  await comments.insertOne(data);
}

async function findComments() {
  const comments = db.collection("comments");
  const result = await comments.find();
  return result.toArray();
}

async function findComment(id) {
  const comments = db.collection("comments");
  const result = await comments.findOne({ _id: new ObjectId(id) });
  return result;
}

async function findModels(collectionName, query, projection) {
  try {
    const collection = db.collection(collectionName);
    const result = await collection.find(query).project(projection).toArray();
    return result;
  } catch (err) {
    return null;
  }
}

async function findModel(collectionName, query) {
  try {
    console.log("query:", query);
    const collection = db.collection(collectionName);
    const result = await collection.findOne({ _id: new ObjectId(query) });
    return result;
  } catch (err) {
    return null;
  }
}

async function updateModel(collectionName, id, document) {
  try {
    console.log("updateModel", id, document);
    const collection = db.collection(collectionName);
    const model = await collection.findOne({ _id: new ObjectId(id) });
    console.log("model:", model);
    if (model) {
      document.time_update = new Date();
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: document }
      );
      console.log("result:", result);
      return result;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

async function removeModel(collectionName, id) {
  try {
    console.log("deleteModel", id);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount == 0) return null;
    console.log("result:", result);
    return result;
  } catch (err) {
    return null;
  }
}

async function insertModel(collectionName, document) {
  try {
    const collection = db.collection(collectionName);
      document.time_create = new Date();
      document.time_update = new Date();
    return await collection.insertOne(document);
  } catch (err) {
    return err;
  }
}

async function checkApiKey(collectionName, query) {
  try {
    const collection = db.collection(collectionName);
    console.log("query:", query);
    let result = null;
    result = await collection.findOne({ api_key: Number(query) });
    console.log("result:", result);
    return result;
  } catch (err) {
    console.log("ERROR:", err);
    return err;
  }
}

async function getKey(collectionName, query) {
  try {
    console.log("collectionName:", collectionName);
    const collection = db.collection(collectionName);
    console.log("query:", query);
    return await collection.findOne({ name: query });
  } catch (err) {
    console.log("ERROR:", err);
    return err;
  }
}

module.exports = {
  insertComment,
  findComments,
  findComment,
  findModels,
  findModel,
  updateModel,
  removeModel,
  insertModel,
  checkApiKey,
  getKey,
};
