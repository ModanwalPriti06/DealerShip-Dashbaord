const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const VehicleSale = require('./models/vehicleSales');

const PORT = 5000

const app = express();
app.use(cors());

// Connecting mongoDB
mongoose.connect('mongodb://localhost:27017/multi_axis_sales', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());

// Get Data
app.get("/api/dealership/metrics", async (req, res) => {
    try {
        const data = await VehicleSale.find({});
        // console.log(data);
        return res.status(200).send(data);
    }
    catch (err) {
        console.error(err);
        return res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})


