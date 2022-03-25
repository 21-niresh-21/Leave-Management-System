module.exports = (sequelize, DataTypes) => {
  const state = sequelize.define(
    "state",
    {
      stateName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueState",
      },
      countryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "uniqueState",
      },
    },
    {
      timestamps: false,
    }
  );

  state.associate = (models) => {
    state.belongsTo(models.country, {
      foreignKey: "countryID",
    });
  };

  return state;
};
