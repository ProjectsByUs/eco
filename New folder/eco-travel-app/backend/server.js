const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const apiKey = 'BKGQ9DG9AS1271GPVSQ6HM7AMR';

const apiURL = 'https://api.climatiq.io/data/v1/estimate';

app.use(cors());
app.use(express.json());

app.post('/api/carbon-footprint', async (req, res) => {
    //const { enery, energy_unit } = req.body; or
    const energy = req.body.energy;
    const str = energy;
    const num = parseInt(str); // 123

    const energy_unit = req.body.energy_unit;

    console.log("Received data:", req.body);

    const data = {
        "emission_factor": {
            "activity_id": "electricity-supply_grid-source_residual_mix",
            "data_version": "^6"
        },
        "parameters":
        {
            "energy": num,
            "energy_unit": energy_unit
        }
    };

    const headers = { 'Authorization': `Bearer ${apiKey}` };

    try {
        const response = await axios.post(apiURL, data, { headers: headers });
        res.json(response.data); // Send the API response to the client

    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send({
            error: 'Error fetching carbon footprint data',
            message: error.message
        });
    }

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});