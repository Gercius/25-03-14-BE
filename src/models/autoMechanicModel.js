const mongoose = require("mongoose");

const autoMechanicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    specialty: {
        type: String,
        required: [true, "Specialty is required"],
        enum: {
            values: [
                "Automobilių Elektrikas",
                "Automobilių Kėbulo Remontininkas",
                "Automobilių Šaltkalvis",
                "Automobilių Mechanikas",
            ],
        },
    },
    imageUrl: {
        type: String,
    },
    autoRepairShop: {
        type: mongoose.Schema.ObjectId,
        ref: "AutoRepairShop",
        required: [true, "Auto repair shop is required"],
    },
    imageUrl: {
        type: String,
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: 0,
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

const AutoMechanic = mongoose.model("AutoMechanic", autoMechanicSchema, "auto_mechanic");
module.exports = AutoMechanic;
