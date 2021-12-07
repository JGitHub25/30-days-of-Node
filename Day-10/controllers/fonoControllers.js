const FonogramaModel = require("../models/SchemaFonograma");
const { StatusCodes } = require("http-status-codes");

const getAllFono = (req, res) => {
  res.status(StatusCodes.OK).json("All gotten.");
};
const getOneFono = (req, res) => {
  res.status(StatusCodes.OK).json("One gotten.");
};
const createFono = (req, res) => {
  res.status(StatusCodes.OK).json("Fono create.");
};
const updateFono = (req, res) => {
  res.status(StatusCodes.OK).json("Fono updated.");
};
const deleteFono = (req, res) => {
  res.status(StatusCodes.OK).json("Fono deleted.");
};

module.exports = { getAllFono, getOneFono, createFono, updateFono, deleteFono };
