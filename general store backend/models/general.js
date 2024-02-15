const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ItemDetails = sequelize.define('items',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    itemname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemdescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemprice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    itemquantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = ItemDetails;