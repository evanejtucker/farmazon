module.exports = function(sequelize, DataTypes) {
    var Grower = sequelize.define("Grower", {
        name: {type: DataTypes.STRING, allowNull: false, validate: { len: [5]}},
        farm_name: {type: DataTypes.STRING, allowNull: false, default: "Personal"},
        city: {type: DataTypes.STRING, allowNull: false, validate: { len: [5]}},
        state: {type: DataTypes.STRING, allowNull: false, validate: { len: [5]}},
        zip_code: {type: DataTypes.INTEGER, allowNull: false, validate: { len: [5,5]}},
        phone: {type: DataTypes.INTEGER, allowNull: false, validate: {len: [10]}},
        email: {type: DataTypes.TEXT, allowNull: false, validate: {len: [5]}},
        image: {type: DataTypes.TEXT, allowNull: true, default: "No Image"}
    });

    Grower.associate = function(models) {
        Grower.hasMany(models.Product, {
        });
    };

    return Grower;
};