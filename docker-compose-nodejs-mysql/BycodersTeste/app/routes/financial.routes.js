module.exports = app => {
  const financials = require("../controllers/financial.controller.js");

  var router = require("express").Router();

  // Create a new
  router.post("/", financials.create);

  // Create a new with file data
  router.post("/InsertFileData", financials.insertFileData);

  // Retrieve Financial Movement by Each Store
  router.get("/FinancialMovementbyEachStore", financials.findFinancialMovementbyEachStore);

  app.use('/api/financial', router);
};
