import React, { useState, useEffect } from 'react';
import "../style/CounelorProfile.css"; // Assuming you have a CSS file for the counselor profile
import emp from './images/employee.svg';
import { useParams } from 'react-router-dom';

const CounselorProfile = () => {
    const { username } = useParams(); // Get the counselor username from the URL parameter
    const [counselor, setCounselor] = useState(null);

    useEffect(() => {
        const fetchCounselor = async () => {
            try {
                const response = await fetch(`http://localhost:6969/verified-counselors/${username}`);
                console.log(username);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCounselor(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCounselor();
    }, [username]);

    return (
        <div className="counselor-profile">
            {counselor ? (
                <>
                    <img src={emp} alt="Counselor Avatar" className="avatar" />
                    <div className="profile-details">
                        <h2>{counselor.username}</h2>
                        <p><strong>Description:</strong> {counselor.description}</p>
                        {/* Add more counselor details here */}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CounselorProfile;
