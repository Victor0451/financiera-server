const Sequelize = require("sequelize");
const db = {};


const sgiSequelize = new Sequelize({
  host: "192.168.1.102",
  database: "werchow-sgi",
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


db.sgiSequelize = sgiSequelize;

db.Sequelize = Sequelize;

module.exports = db;
