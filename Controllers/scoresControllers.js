var db = require("../models");

module.exports = {
  findAll: function (req, res, next) {
    return new Promise(function (resolve, reject) {
      db.Score.findAll({}).then(function (results) {
        res.json({ result: "success", data: results });
      });
    });
  },

  create: function (req, res, next) {

      console.log(req.body);
      db.Score.create(req.body).then(function (result) {
        res.json({ result: "success", data: result });
      });

  },

  update: function (req, res, next) {
    // Can you look up how to handle updating with sequelize?
  },

  delete: function (req, res, next) {
    // Can you look up how to handle deleting with sequelize?
  },
};
