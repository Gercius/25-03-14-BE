const AutoMechanic = require("../models/autoMechanicModel");

exports.getAllMechanics = async (req, res) => {
    try {
        const mechanics = await AutoMechanic.find().populate("autoRepairShop", "name");

        if (!mechanics.length) {
            return res.status(404).json({
                status: "Failed",
                message: "No mechanics found",
            });
        }

        res.status(200).json({
            status: "Success",
            results: mechanics.length,
            data: mechanics,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.getMechanic = async (req, res) => {
    try {
        const mechanic = await AutoMechanic.findById(req.params.id).populate("autoRepairShop", "name");

        if (!mechanic) {
            return res.status(404).json({
                status: "Failed",
                message: "Mechanic not found",
            });
        }

        res.status(200).json({
            status: "Success",
            data: { mechanic },
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.addMechanic = async (req, res) => {
    try {
        const newMechanic = await AutoMechanic.create(req.body);
        res.status(201).json({
            status: "Mechanic Added",
            data: newMechanic,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

// todo - for some reason I get "status": "Mechanic Updated" response when using fields that are not declared in the schema. In this case data is not updated though.
exports.updateMechanic = async (req, res) => {
    const filter = { _id: req.params.id };

    try {
        const mechanic = await AutoMechanic.findOneAndUpdate(filter, req.body, {
            new: true,
            runValidators: true,
        });

        if (!mechanic) {
            return res.status(404).json({
                status: "Failed",
                message: "Mechanic not found",
            });
        }

        res.status(200).json({
            status: "Mechanic Updated",
            data: { mechanic },
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.deleteMechanic = async (req, res) => {
    try {
        await AutoMechanic.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "Mechanic Deleted",
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};
