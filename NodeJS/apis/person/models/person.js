module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('persons', {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      country: DataTypes.STRING,
      gender: DataTypes.ENUM('m', 'f'),
      birthday: DataTypes.DATEONLY
      },
      {
        freezeTableName: true,
      }
    );  
    return Person;
  }