const express = require("express");
const app = express();
const vehicleRoute = require("./adapters/routes/vehicleRoute");
const deviceRoute = require("./adapters/routes/deviceRoute");
const deviceTypeRoute = require("./adapters/routes/deviceTypeRoute");
const temperatureRoute = require("./adapters/routes/temperatureRoute");




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello there`)
  })
app.use("/vehicles", vehicleRoute)
app.use("/device", deviceRoute)
app.use("/devices_type", deviceTypeRoute)
app.use("/log_temperature", temperatureRoute)
// app.use("/log_location", logLocationRoute)


const PORT = 3000

app.listen(PORT, function (req, res) {
    console.log(`Server started on ${PORT}`);
  });