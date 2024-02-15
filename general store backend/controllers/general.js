const ItemDetails = require('../models/general');

exports.postItems = async (req, res, next) => {
    try {
        const name = req.body.itemname;
        const description = req.body.itemdescription;
        const price = req.body.itemprice;
        const quantity = req.body.itemquantity;

        const data = await ItemDetails.create({
            itemname: name,
            itemdescription: description,
            itemprice: price,
            itemquantity: quantity
        });

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getItems = async (req, res, next) => {
    try {
        const itemsData = await ItemDetails.findAll();
        res.status(200).json({ allItems: itemsData });
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getEditItem = async (req, res, next) => {
    try {
        const { quantity } = req.body;
        const id = req.params.userid;
        console.log(id, quantity);


        const items = await ItemDetails.findOne({ where: { id: id } })
        // console.log(items);
        const updateItem = await items.update({ itemquantity: quantity });
        res.status(200).json(updateItem);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }


}


//Deletes an item from database based on its id
exports.deleteItem = async function (req, res, next) {
    // var itemID=parseInt(req.params.userid);
    const id = req.params.userid;


    if (isNaN(id)) {
        return res.status(400).send("Invalid Item ID")
    }
    try {
        console.log(id);

        const data = await ItemDetails.destroy({ where: { id: id } });
        if (!data) {
            return res.status(400).send("Failed to delete!");
        } else {
            return res.status(200).send('Delete Successful');
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

