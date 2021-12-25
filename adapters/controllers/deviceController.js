const pool = require("../db");

const getDevices = (req, res) => {
  pool.query("SELECT * FROM devices ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addDevice = (req, res) => {
  const device = req.body;

  pool.query(
    `INSERT INTO devices (vehicle_id,device_type_id,device_name) 
    VALUES ('${device.vehicle_id}','${device.device_type_id}','${device.device_name}')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Device added`);
    }
  );
};

const updateDevice = (req, res) => {
  const device = req.body;
  pool.query(
    `UPDATE devices SET 
      vehicle_id = '${device.vehicle_id}', device_type_id = '${device.device_type_id}', device_name = '${device.device_name}',
      is_active = '${device.is_active}', is_online = '${device.is_online}' WHERE id = '${device.id}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Device with ID : ${device.id} updated`);
    }
  );
};

const deleteDevice = (req, res) => {
  const device = req.body;

  pool.query(
    `DELETE FROM devices WHERE id = '${device.id}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Device with ID: ${device.id} deleted.`);
    }
  );
};

module.exports = {
  getDevices,
  addDevice,
  updateDevice,
  deleteDevice,
};
