module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        prod_name: {type: DataTypes.STRING, allowNull: false},
        prod_category: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
        qty: {type: DataTypes.INTEGER, allowNull: false, default: 1},
        qty_measure: {type: DataTypes.STRING, allowNull: false},
        harvest: {type: DataTypes.DATEONLY, allowNull: false},
        organic: {type: DataTypes.BOOLEAN, default: false},
        picture: {type: DataTypes.TEXT, allowNull: true, default: "No Image"},
        description: {type: DataTypes.TEXT, allowNull: false, validate: { len: [5]}}
    });

    Product.associate = function(models) {
        Product.belongsTo(models.Grower, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Product;
};