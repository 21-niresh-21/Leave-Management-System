module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define(
    "Organisation",
    {
      organisationName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueOrganisation",
      },
      organisationDomain: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueOrganisation",
      },
      establishedYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      mailID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "uniqueOrganisation",
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stateID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pinCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      countryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },
    {
      timestamps: false,
    }
  );

  Organisation.associate = (models) => {
    Organisation.belongsTo(models.country, {
      foreignKey: "countryID",
    });
  };

  return Organisation;
};
