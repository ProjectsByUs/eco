import React, { useState } from 'react';
import axios from 'axios';
import './CarbonFootPrint.css';

const CarbonFootPrint = () => {
    const [energy, setEnergy] = useState('');
    const [energyUnit, setEnergyUnit] = useState('kWh');
    const [co2e, setCo2e] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setCo2e(null);

        try {
            const response = await axios.post('http://localhost:5000/api/carbon-footprint', {
                energy,
                energy_unit: energyUnit
            });

            if (response.data && response.data.co2e) {
                setCo2e(response.data.co2e); // Assuming the API returns 'co2e'
            } else {
                setError('Error: CO2e value not received from the server.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="carbon-footprint-container">
            <h2 className="title">Carbon Footprint Estimator</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Energy Consumption (in {energyUnit}):</label>
                    <input
                        type="number"
                        value={energy}
                        onChange={(e) => setEnergy(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label>Energy Unit:</label>
                    <select
                        value={energyUnit}
                        onChange={(e) => setEnergyUnit(e.target.value)}
                        className="input-field"
                    >
                        <option value="kWh">kWh</option>
                        <option value="MJ">MJ</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Estimate'}
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {co2e !== null && (
                <div className="result">
                    <h3>Your Estimated CO2e: </h3>
                    <p className="co2e-value">{co2e} kg CO2e</p>
                </div>
            )}
        </div>
    );
};

export default CarbonFootPrint;
