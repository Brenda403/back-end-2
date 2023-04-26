const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const {
  getHouses,
  createHouse,
  updateHouse,
  deleteHouse,
} = require("./controller");

//routes
app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:houseId", updateHouse);
app.delete("/api/houses/:houseId", deleteHouse);

app.listen(4004, () => console.log("listening on port 4004"));
