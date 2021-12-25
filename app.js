const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000

app.use("/vehicles", vehicleRoute)
app.use("/device", deviceRoute)
app.use("/devices_type", deviceTypeRoute)
app.use("/log_temperature", logTemperatureRoute)
app.use("/log_location", logLocationRoute)


app.listen(PORT, function (req, res) {
    console.log(`Server started on ${PORT}`);
  });