const menuService = require("../services/MenuService");

exports.getAllNourishments = async (req, res) => {
  try {
    const nourishments = await menuService.getAllNourishments();
    res.json({ data: nourishments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNourishment = async (req, res) => {
  try {
    const nourishment = await menuService.createNourishment(req.body);
    res.json({ data: nourishment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNourishmentsByIdList = async (req, res) => {
  try {
    const nourishments = await menuService.getNourishmentsByIdList(req.body);
    res.json({ data: nourishments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNourishmentById = async (req, res) => {
  try {
    const nourishment = await menuService.getNourishmentById(req.params.id);
    res.json({ data: nourishment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNourishment = async (req, res) => {
  try {
    const nourishment = await menuService.updateNourishment(req.params.id, req.body);
    res.json({ data: nourishment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNourishment = async (req, res) => {
  try {
    const nourishment = await menuService.deleteNourishment(req.params.id);
    res.json({ data: nourishment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
