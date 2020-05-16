const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let itemSchema = new Schema({

    listId: {
        type: String,
        
    },

    itemId: {
        type: String,
        
        //index: true,
        //unique: true
    },
    itemName: {
        type: String,
       
    },

    createdOn: {
        type: Date,
        
    },
    modifiedOn: {
        type: Date,
       
    },

    isDone:{
        type : Boolean,
        
    },

    action:{
        type:String
    }



})


mongoose.model('ItemUndoModel', itemSchema);