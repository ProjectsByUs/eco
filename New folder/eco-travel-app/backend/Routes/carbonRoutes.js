const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://beta3.api.climatiq.io/estimate", {
            headers: { Authorization: `Bearer ${process.env.CLIMATIQ_API_KEY}` },
            params: {
                activity_id: "passenger_vehicle-vehicle_type_car-fuel_source_na-distance_na-occupancy_1",
                parameters: { distance: 100, distance_unit: "km" },
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch carbon footprint data" });
    }
});

module.exports = router;
