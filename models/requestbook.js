'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestBook = sequelize.define('RequestBook', {
    borrowedDate: DataTypes.DATE,
    returnedDate: DataTypes.DATE,
    status: DataTypes.STRING,
    fee: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    username: DataTypes.STRING,
    borrowingDate: DataTypes.STRING,
    returningDate: DataTypes.STRING,
    bookLend: DataTypes.INTEGER
  }, {});
  RequestBook.associate = function(models) {
    // associations can be defined here
    RequestBook.belongsTo(models.Book,{foreignKey:'bookId'});
    RequestBook.belongsTo(models.User, {foreignKey:'userId'});
  };
  return RequestBook;
};