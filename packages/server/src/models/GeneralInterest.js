const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const GeneralInterest = sequelize.define(
      "GeneralInterest",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
  
        hardwareType: {
          type: DataTypes.ENUM("cleaning", "kitchen", "warehouse"),
          allowNull: false,
        },
  
        autonomy: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
  
        weight: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
  
        price: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
  
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal("NOW()"),
        },
  
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal("NOW()"),
        },
      },
      {
        tableName: "sl_general_interests",
      }
    );
  
    GeneralInterest.associate = () => {
      const { Brand } = sequelize.models;
  
      GeneralInterest.belongsTo(Brand, {
        as: "brand",
        foreignKey: {
          name: "brandId",
          allowNull: false,
        },
      });
    };
  
    return GeneralInterest;
  };
  