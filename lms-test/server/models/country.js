module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define("country", {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },{
    timestamps: false,
  });

  return country;
};
