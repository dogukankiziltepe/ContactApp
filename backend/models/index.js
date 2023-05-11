const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
const models = {
  User : require("./User.model.js")(sequelize, Sequelize),
  Contact : require("./Contacts.model.js")(sequelize, Sequelize),
  PhoneNumber : require("./PhoneNumbers.model.js")(sequelize, Sequelize)
};
Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = models.User;
db.Contact = models.Contact
db.PhoneNumber = models.PhoneNumber


module.exports = db;