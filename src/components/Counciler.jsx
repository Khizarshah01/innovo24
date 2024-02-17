import React from 'react';
import "../style/Counciler.css";
import emp from './images/employee.svg'
import { NavLink } from 'react-router-dom';

function Counciler() {
    // Sample counselor data
    const counselors = [
        { name: 'John Doe', description: 'Architect & Engineer' },
        { name: 'Jane Smith', description: 'Therapist & Life Coach' },
        { name: 'John Doe', description: 'Architect & Engineer' },
        { name: 'Jane Smith', description: 'Therapist & Life Coach' },
        { name: 'John Doe', description: 'Architect & Engineer' },
        { name: 'Jane Smith', description: 'Therapist & Life Coach' },
        // Add more counselors as needed
    ];

    return (
        <div className='card-tank'>
            {counselors.map((counselor, index) => (
                
                <div key={index} className="card">
                    <img src={emp} alt="Avatar" id='card-image' />
                    <div className="card-container">
                        <h4><b>{counselor.name}</b></h4>
                        <p>{counselor.description}</p>
                        <NavLink to={'/CouncilProfile'}>
                        <button className='button-26'>profile</button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Counciler;
