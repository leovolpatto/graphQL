module.exports = (sequelize, DataTypes) => {
    const Friendship = sequelize.define('friendships', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        idPerson: {
          type: DataTypes.UUID,
          allowNull: false
        },
        idFriendPerson: {
          type: DataTypes.UUID,
          allowNull: false
        },
        since: {
          type: DataTypes.DATE,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        }
      },
      {
        freezeTableName: true,
      }
    );
    
    return Friendship;
  }