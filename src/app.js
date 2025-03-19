const express = require("express");
const autoRepairShopRouter = require("./routes/autoRepairShopRoutes");

const app = express();
app.use(express.json());

app.use("/api/auto-repair-shop", autoRepairShopRouter);

module.exports = { app };
