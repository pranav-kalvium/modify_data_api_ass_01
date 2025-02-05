const MenuItem = require('../model/menuSchema')

const addItem = async(req,res) => {
    try{
        const {name , description, price} = req.body;
        if(!name || !price){
            res.json({message : 'All fields are required'})
        }
        const newItem = await MenuItem.create({name , description, price})
        res.status(201).json(newItem)

    }catch(err){
        res.status(400).json({error : err})
    }
}

const getAllItems = async (req,res) => {
    try{
        const item = await MenuItem.find()
        if(item.length == 0){
            res.json({message : 'No items found'})
        }
        res.status(201).json(item)
    }catch(err){
        res.status(400).json({error : err})
    }
}
module.exports = {addItem,getAllItems}