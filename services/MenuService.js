const MenuModel = require("../models/Menu");

exports.getAllNourishments = async () => {
  return await MenuModel.find();
};

exports.createNourishment = async (nourishment) => {
  if (!nourishment || !nourishment.price){
    throw new Error("Nourishment must have price")
  }
  const price = Number.parseInt(nourishment.price);
  if (!price) {
    throw new Error("price have to be a number")
  }
  return await MenuModel.create(nourishment);
};
exports.getNourishmentById = async (id) => {
  return await MenuModel.findById(id);
};

exports.getNourishmentsByIdList = async (ids) => {
  return await MenuModel.find({_id: {$in: ids.ids_list}});
};
exports.getNourishmentById = async (id) => {
  return await MenuModel.findById(id);
};

exports.updateNourishment = async (id, nourishment) => {
  const price = Number.parseInt(nourishment.price);
  if (!price) {
    throw new Error("price have to be a number")
  }
  return await MenuModel.findByIdAndUpdate(id, nourishment);
};

exports.deleteNourishment = async (id) => {
  return await MenuModel.findByIdAndDelete(id);
};
