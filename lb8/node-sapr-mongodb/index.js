const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const controller = require("./controllers/controller");
const swaggerJSON = require("./docs.json");

const app = express();
const PORT = 3000;




app.use(express.json());

app.use(morgan('dev'));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSON)
);

app
  .route("/comments")
  .get(controller.getComments)
  .post(express.json(), controller.postComments);

app
  .route("/models")
  .get(controller.getModels)
  .post(controller.check, controller.postModels)


app
  .route("/models/:id")
  .get(controller.getModel)
  .put(controller.check, controller.putModel)
  .delete(controller.check, controller.deleteModel)




app.get("/comments/:id", controller.getComment);

app.use(controller.errorsController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
