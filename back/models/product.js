const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
    
    description: {
            type: String,
            maxlength: 400
        },
    title: {
            type: String,
            maxlength: 100,
        },
    isDone: {
            type: Boolean,
            default:false
        },
    id:{
        type:Number,
        default: Date.now
    }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
