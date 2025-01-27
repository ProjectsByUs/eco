import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const CarbonFootPrint = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchCarbonData = async () => {
            const response = await axios.get("http://localhost:5000/api/carbon-footprint");
            setData(response.data);
        };
        fetchCarbonData();
    }, []);

    if (!data) return <p>Loading...</p>;

    const chartData = {
        labels: ["Car", "Train", "Bus", "Flight"],
        datasets: [
            {
                label: "CO2 Emissions (kg)",
                data: [100, 50, 70, 300],
                backgroundColor: ["#34d399", "#10b981", "#059669", "#064e3b"],
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default CarbonFootPrint;
