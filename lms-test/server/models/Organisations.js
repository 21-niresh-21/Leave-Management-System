module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define("Organisation", {
    organisationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organisationDomain: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    establishedYear: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    mailID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stateFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countryFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pinCode: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Organisation;
};
