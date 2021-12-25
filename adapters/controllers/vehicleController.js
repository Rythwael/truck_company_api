const pool = require("../db");

const getVehicles = (req, res) => {
    pool.query('SELECT * FROM vehicles ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const addVehicle = (req, res) => {
    const vehicle = req.body
  
    pool.query(`INSERT INTO vehicles (vehicle_plate) 
    VALUES ('${vehicle.vehicle_plate}')`, (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Vehicle adding was successful`)
    })
  }

  module.exports = {
    getVehicles,
    addVehicle
  }
