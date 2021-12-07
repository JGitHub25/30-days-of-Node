const FonogramaModel = require("../models/SchemaFonograma");
const { StatusCodes } = require("http-status-codes");

const getAllFono = async (req, res) => {
  const fonos = await FonogramaModel.find({}).sort("cod_proy");

  res.status(StatusCodes.OK).json({ count: fonos.length, fonos });
};
const getOneFono = async (req, res) => {
  res.status(StatusCodes.OK).json("One gotten.");
};
const createFono = async (req, res) => {
  res.status(StatusCodes.OK).json("Fono create.");
};
const updateFono = async (req, res) => {
  res.status(StatusCodes.OK).json("Fono updated.");
};
const deleteFono = async (req, res) => {
  res.status(StatusCodes.OK).json("Fono deleted.");
};

module.exports = { getAllFono, getOneFono, createFono, updateFono, deleteFono };
