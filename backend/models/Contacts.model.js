module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define('Contact', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
      },
      surname:{
        type: DataTypes.STRING,
      },
      userID:{
        type: DataTypes.INTEGER,
        foreignKey: true,
      }
    });
    Contact.associate = function(models) {
      Contact.hasMany(models.PhoneNumber,{foreignKey: 'contactID'});
      Contact.belongsTo(models.User,{foreignKey: 'userID'});
    };
    return Contact;
  };