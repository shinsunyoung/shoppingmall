module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
        },
        {
            timestamps: false
        });
};