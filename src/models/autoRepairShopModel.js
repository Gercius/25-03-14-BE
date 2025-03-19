const mongoose = require("mongoose");

const autoRepairShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    address: {
        type: String,
        required: [true, "Adress is required"],
    },
    manager: {
        type: String,
        required: [true, "Manger is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

autoRepairShopSchema.pre("findOneAndUpdate", function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const AutoRepairShop = mongoose.model("AutoRepairShop", autoRepairShopSchema, "auto_repair_shop");
module.exports = AutoRepairShop;
