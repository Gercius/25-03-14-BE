require("dotenv").config();
const { app } = require("./app");
const { connectToDb } = require("./config/db");

const PORT = process.env.PORT || 3000;

connectToDb();

app.listen(PORT, () => {
    console.log(`Server runs on https://localhost:${PORT}`);
});
