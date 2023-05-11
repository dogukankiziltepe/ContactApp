

  module.exports = function(sequelize, DataTypes) {
    var PhoneNumber = sequelize.define('PhoneNumber', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      contactID: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      phoneNumber:{
        type: DataTypes.STRING,
      },
    });
    PhoneNumber.associate = function(models) {
      PhoneNumber.belongsTo(models.Contact,{foreignKey: 'contactID'});
    };
    return PhoneNumber;
  };