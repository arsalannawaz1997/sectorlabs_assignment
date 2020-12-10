module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define(
      "Client",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
  
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
  
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
  
        phone: {
          type: DataTypes.STRING(13),
          allowNull: false,
        },
  
        address: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
  
        notes: {
          type: DataTypes.TEXT(),
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
        tableName: "sl_clients",
      }
    );
  
    Client.associate = () => {
      const { GeneralInterest, Feature, StaffMember } = sequelize.models;
  
      Client.belongsTo(GeneralInterest, {
        as: "generalInterest",
        foreignKey: {
          name: "generalInterestId",
          allowNull: false,
        },
      });
  
      Client.belongsTo(Feature, {
        as: "optionalFeature",
        foreignKey: {
          name: "optionalFeatureId",
          allowNull: false,
        },
      });
  
      Client.belongsTo(StaffMember, {
        as: "assignedStaffMember",
        foreignKey: {
          name: "assignedStaffMemberId",
          allowNull: true,
        },
      });
    };
  
    return Client;
  };
  