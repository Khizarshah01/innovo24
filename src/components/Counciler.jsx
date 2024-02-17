import React, { useState, useEffect } from 'react';
import "../style/Counciler.css";
import emp from './images/employee.svg'
import { NavLink } from 'react-router-dom';

function Counciler() {
    // Define state to store counselor data
    const [counselors, setCounselors] = useState([]);

    // Fetch counselor data from the backend API when the component mounts
    useEffect(() => {
        const fetchCounselors = async () => {
            try {
                const response = await fetch('http://localhost:6969/verified-counselors');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCounselors(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCounselors();
    }, []);

    return (
        <div className='card-tank'>
            {counselors.map((counselor, index) => (
                <div className="card">
                        <img src={emp} alt="Avatar" id='card-image' />
                        <div className="card-container">
                            <h4><b>{counselor.username}</b></h4>
                            <p>{counselor.description}</p>
                        <NavLink key={index} to={`/counselor/${index + 1}`} className="linknav">
                            <button className='button-26'>Profile</button>
                </NavLink>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Counciler;
