require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
} = process.env;


 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, 
    native: false, 
  });

// const sequelize = new Sequelize(DB_DEPLOY, {

//   logging: false, 
//   native: false, 
// });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Company, 
        Reviews, 
        PaymentMethod, 
        Purchases, 
        Coupon, 
        Invoice, 
        BankAccounts, 
        Logistics, 
        Complaints, 
        Products, 
        Shipments, 
        User, 
        user_products} = sequelize.models;

User.belongsToMany(Products, {through: "user_products"});
Products.belongsToMany(User, {through: "user_products"});

User.hasMany(Shipments, { foreignKey: "userId", sourceKey: "id" });
Shipments.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

User.hasMany(BankAccounts, { foreignKey: "userId", sourceKey: "id" });
BankAccounts.belongsTo(User, { foreignKey: "userId", targetKey: "id"});

User.hasMany(Complaints, { foreignKey: "userId", sourceKey: "id" });
Complaints.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

User.hasMany(Coupon,  { foreignKey: "userId", sourceKey: "id" });
Coupon.belongsTo(User,  { foreignKey: "userId", targetKey: "id" });

User.hasMany(Invoice, { foreignKey: "userId", sourceKey: "id" });
Invoice.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Company.hasMany(Invoice, { foreignKey: "companyId", sourceKey: "id" });
Invoice.belongsTo(Company, { foreignKey: "companyId", targetKey: "id" });

Purchases.hasOne(Invoice, { foreignKey: "purchaseId", sourceKey: "id" });
Invoice.belongsTo(Purchases, { foreignKey: "purchaseId", targetKey: "id" });

PaymentMethod.hasOne(Invoice, { foreignKey: "paymentMethodId", sourceKey: "id" });
Invoice.belongsTo(PaymentMethod, { foreignKey: "paymentMethodId", targetKey: "id" });

Purchases.hasMany(Reviews, {foreignKey: "purchaseId", targetKey: "id"});
Reviews.belongsTo(Purchases, {foreignKey: "purchaseId", sourceKey: "id"});

Products.hasOne(Purchases, { foreignKey: "productsId", sourceKey: "id" });
Purchases.belongsToMany(Products, { through: "product_purchases"});

User.hasMany(Purchases, { foreignKey: "userId", sourceKey: "id" });
Purchases.belongsTo(User, { foreignKey: "userId", sourceKey: "id" });

User.hasOne(PaymentMethod, { foreignKey: "userId", sourceKey: "id" });
PaymentMethod.belongsToMany(User, { through: "user_paymentMethod" });

User.hasMany(Reviews, { foreignKey: "userId", sourceKey: "id" });
Reviews.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Products.hasMany(Reviews, { foreignKey: "productsId", sourceKey: "id" });
Reviews.belongsTo(Products, { foreignKey: "productsId", targetKey: "id" });

Logistics.hasMany(Shipments, { foreignKey: "logisticsId", sourceKey: "id" });
Shipments.belongsTo(Logistics, { foreignKey: "logisticsId", targetKey: "id" });


module.exports = {
  user_products,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};