const express = require("express");
const cors = require("cors");
const autoRepairShopRouter = require("./routes/autoRepairShopRoutes");
const autoMechanicRouter = require("./routes/autoMechanicRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auto-repair-shop", autoRepairShopRouter);
app.use("/api/auto-mechanic", autoMechanicRouter);

module.exports = { app };
