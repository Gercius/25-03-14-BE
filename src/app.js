const express = require("express");
const autoRepairShopRouter = require("./routes/autoRepairShopRoutes");
const autoMechanicRouter = require("./routes/autoMechanicRoutes");

const app = express();
app.use(express.json());

app.use("/api/auto-repair-shop", autoRepairShopRouter);
app.use("/api/auto-mechanic", autoMechanicRouter);

module.exports = { app };
