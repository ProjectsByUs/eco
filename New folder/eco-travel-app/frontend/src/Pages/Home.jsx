import React from 'react';
import { Link } from 'react-router-dom'; // For linking to the CarbonFootprintPage

const HomePage = () => {
    const imagePath = 'https://i.pcmag.com/imagery/articles/01dITSJznwNhfew5UYscn3c-2.fit_lim.size_1600x900.v1693581778.jpg'; // Assuming your image is in the 'public/images' folder

    console.log("Image path:", imagePath); // Debugging step to ensure correct image path

    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
            {/* Hero Section with image */}
            <div
                style={{
                    backgroundImage: `url(${imagePath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh', // Full viewport height
                    position: 'relative',
                }}
            >
                {/* Overlaying Text and Button */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%', // Center vertically
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Adjust to center exactly
                        color: 'white', // White text
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Carbon Footprint Estimator</h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>Your one-stop solution for calculating your carbon footprint.</p>
                    {/* Button linking to the Carbon Footprint Page */}
                    <Link to="/carbon-footprint">
                        <button
                            style={{
                                padding: '15px 30px',
                                fontSize: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for button
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
                        >
                            Start Estimating
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
