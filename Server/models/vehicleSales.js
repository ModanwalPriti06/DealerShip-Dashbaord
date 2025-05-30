  const mongoose = require('mongoose');

// 1. Define your Mongoose schema/model (match your collection)
const vehicleSaleSchema = new mongoose.Schema({
  Month: String,
  NewVehicleSales: Number,
  UsedVehicleSales: Number,
  NewVehicleInventory: Number,
  AppointmentSetRate: Number,
  AppointmentCloseRate: Number
}, { collection: 'vehicle_sales' });

const VehicleSale = mongoose.model('VehicleSale', vehicleSaleSchema);

module.exports = VehicleSale;