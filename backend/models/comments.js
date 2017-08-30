module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        commenter: {type: DataTypes.STRING, allowNull: false, validate: { len: [5]}},
        product_id: {type: DataTypes.INTEGER, allowNull: false},
        grower_id: {type: DataTypes.INTEGER, allowNull: false},
        comment: {type: DataTypes.TEXT, allowNull: false, validate: { len: [1, 140]}}
    });

    Comment.associate = function(models) {
        Comment.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};