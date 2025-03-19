const AutoRepairShop = require("../models/autoRepairShopModel");

exports.addRepairShop = async (req, res) => {
    try {
        const newShop = await AutoRepairShop.create(req.body);
        res.status(201).json({
            status: "Shop Added",
            data: newShop,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.updateRepairShop = async (req, res) => {
    const filter = { _id: req.params.id };

    try {
        const shop = await AutoRepairShop.findOneAndUpdate(filter, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "Shop Updated",
            data: { shop },
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.deleteRepairShop = async (req, res) => {
    try {
        await AutoRepairShop.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "Shop Deleted",
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};
