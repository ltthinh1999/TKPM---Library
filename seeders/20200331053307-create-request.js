'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('RequestBooks', [{
        id: 6,
        borrowedDate: "2020-03-31 12:31:58.383+07",
        returnedDate: "2020-03-31 12:31:58.383+07",
        status: "Pending",
        fee: 100,
        comment: "12h",
        username: "1753014",
        borrowingDate: "",
        returningDate: "",
        bookLend: 2,
        userId :1753014,
        bookId :2,
        createdAt :"2020-03-31 12:31:58.383+07",
        updatedAt :  "2020-03-31 12:31:58.383+07"
        
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
