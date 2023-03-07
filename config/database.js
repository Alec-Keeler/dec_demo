module.exports = {
  development: {
    storage: process.env.DB_FILE, // location of DB file
    dialect: "sqlite", // specify RDBMS
    seederStorage: "sequelize",
    benchmark: true, // prints execution time to terminal
    logQueryParameters: true, // prints parameters with logged SQL
    typeValidation: true, // model-level data type validation
    // logging: false // print SQL to terminal unless set to false
  },
};