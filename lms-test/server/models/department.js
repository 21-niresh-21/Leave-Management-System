module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define(
    "department",
    {
      departmentName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueDepartment",
      },
    },
    {
      timestamps: false,
    }
  );

  return department;
};
