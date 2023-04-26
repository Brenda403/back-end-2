let db = require("./db.json");
let houseId = 4;

module.exports = {
  getHouses: (req, res) => {
    let allHouses = db;
    res.status(200).send(allHouses);
  },
  deleteHouse: (req, res) => {
    const { houseId } = req.params;
    let houseIndex = db.findIndex((el) => {
      return el.id === +houseId;
    });
    db.splice(houseIndex, 1);
    console.log(houseId);
    res.status(200).send(db);
  },
  createHouse: (req, res) => {
    houseId++;
    let newHouse = {
      ...req.body,
      id: houseId,
    };
    db.push(newHouse);
    res.status(200).send(db);
  },
  updateHouse: (req, res) => {
    const { houseId } = req.params;
    const { type } = req.body;

    let houseIndex = db.findIndex((el) => {
      return el.id === +houseId;
    });

    if (type === "minus") {
      db[houseIndex].price -= 10000;
    }
    if (type === "plus") {
      db[houseIndex].price += 10000;
    }
    res.status(200).send(db);
  },
};
