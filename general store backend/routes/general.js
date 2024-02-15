const express = require('express');

const itemController = require('../controllers/general');

const router = express.Router();

router.post('/item/add-item', itemController.postItems);

router.get('/item/get-items', itemController.getItems);

router.patch('/item/edit-items/:userid', itemController.getEditItem);

router.delete('/item/delete-items/:userid', itemController.deleteItem);

module.exports = router; 