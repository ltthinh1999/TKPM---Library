'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    kindid: DataTypes.INTEGER,
    author: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    available: DataTypes.INTEGER,
    ratings: DataTypes.FLOAT,
    imgID: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.RequestBook,{foreignKey:'bookId'})
  };
  return Book;
};