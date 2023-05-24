const service = require('../services/service');
const { ObjectId } = require('mongodb');

async function getComments(req, res) {
  let allComments = await service.findComments()
  res.json(allComments)
}

async function getComment(req, res) {
  if (ObjectId.isValid(req.params.id)) {
    let comment = await service.findComment(req.params.id)
    res.json(comment)
  } else {
    res.status(404).send("Not Found")
  }
}

function postComments(req, res) {
  const { name, text } = req.body;
  service.insertComment({ name, text });
  res.json()
}

const getModels = (req, res, next) => {
  try {
    console.log("getModels");
    service.findModels("Inf-model", {}, { name_model: 1 }).then((result) => {
      console.log("result:", result);
      res.json(result);
    });
  } catch (err) {
    next(err);
  }
};

const getModel = (req, res, next) => {
  try {
    console.log("getModel");
    let id = req.params.id;
    console.log("id:", id);
    service.findModel("Inf-model", id).then((result) => {
      console.log("result:", result);
      if (result == null) res.send(404, "404 Not Found Model with this id");
      else res.json(result);
    });
  } catch (err) {
    next(err);
  }
};

const putModel = (req, res, next) => {
  try {
    console.log("putModel");
    let id = req.params.id;
    console.log("id:", id);
    const data = req.body;
    if (
      data.name &&
      data.name_model &&
      data.type &&
      data.model &&
      data.description &&
      data.comments
    ) {
      service.updateModel("Inf-model", id, data).then((result) => {
        console.log("result:", result);
        if (result == null) res.send(404, "404 Not Found Model with this id");
        else res.json(result);
      });
    } else {
      res.sendStatus(400, "400 Bad Request");
    }
  } catch (err) {
    next(err);
  }
};

const deleteModel = (req, res, next) => {
  try {
    console.log("deleteModel");
    let id = req.params.id;
    console.log("id:", id);
    service.removeModel("Inf-model", id).then((result) => {
      console.log("result:", result);
      if (result == null) res.send(404, "404 Not Found Model with this id");
      else res.json(result);
    });
  } catch (err) {
    next(err);
  }
};

const postModels = (req, res, next) => {
  try {
    console.log("addModel");
    const data = req.body;
    if (
      data.name &&
      data.name_model &&
      data.type &&
      data.model &&
      data.description &&
      data.comments
    ) {
      service.insertModel("Inf-model", data).then((result) => {
        res.json(result);
      });
    } else {
      res.sendStatus(400, "400 Bad Request");
    }
  } catch (err) {
    next(err);
  }
};

const check = (req, res, next) => {
  try {
    console.log("check");
    const key = req.headers["api_key"];
    console.log("KEY:", key);
    service.checkApiKey("Key-API", key).then((result) => {
      console.log("result_itog:", result);
      if (result == null) res.send(401, "401 Unauthorized API key");
      else next();
    });
  } catch (err) {
    next(err);
  }
};

async function errorsController(err, req, res, next) {
  res.send(500, err.message);
  }

module.exports = {
  getComments,
  postComments,
  getComment,
  getModels,
  getModel,
  deleteModel,
  putModel,
  postModels,
  check,
  errorsController,
}