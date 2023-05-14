module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status:{
			type: DataTypes.ENUM('active','passive','deleted'),
			allowNull: false
		},
		role:{
			type: DataTypes.ENUM('admin','user'),
			allowNull: false
		}
  });
  User.associate = function(models) {
    User.hasMany(models.Contact,{foreignKey: 'userID'});
  };
  return User;
};