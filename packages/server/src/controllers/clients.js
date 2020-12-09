const express = require("express");
const ClientsService = require("../domain/clients");
const { sequelize } = require("../models");

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    const clientsService = new ClientsService(request.log, sequelize);

    const clients = await clientsService.getList(request.query);

    response.status(200).json(clients);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const clientsService = new ClientsService(request.log, sequelize);

    const client = await clientsService.getById(request.params.id);

    response.status(200).json(client);
  } catch (error) {
    next(error);
  }
});

router.post("/new", async (request, response, next) => {
  try {
    const clientsService = new ClientsService(request.log, sequelize);

    const client = await clientsService.create(request.body);

    response.status(200).json(client);
  } catch (error) {
    next(error);
  }
});

router.get("/brands", async (request, response, next) => {
  try {
    const clientsService = new ClientsService(request.log, sequelize);

    const brands = await clientsService.getBrands(request.query);

    response.status(200).json(brands);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
