const Sequelize = require("sequelize");
const db = {};


const financieraSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "financiera",
  username: "vlongo",
  password: "nokia5800",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


db.financieraSequelize = financieraSequelize;

db.Sequelize = Sequelize;

module.exports = db;
