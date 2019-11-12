module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: DataTypes.STRING,
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    // Book.associate = (models) => {
    //     Book.belongsTo(models.author);
    // };
  
    return Book;
  }