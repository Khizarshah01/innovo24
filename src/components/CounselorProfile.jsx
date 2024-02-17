import React from 'react';
import '../style/CounelorProfile.css'; // Import your CSS file
import avatar from './images/employee.svg'; // Import your default avatar image

const CounselorProfile = () => {
  // Default dummy data for the counselor profile
  const counselor = {
    name: 'John Doe',
    description: 'Architect & Engineer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    officeHours: 'Mon-Fri 9am-5pm',
    location: '123 Main Street, Anytown, USA',
    bio: 'John Doe is a licensed counselor with over 10 years of experience...',
    // Add more details about the counselor here
  };

  return (
    <div className="counselor-profile">
      <img src={avatar} alt="Counselor Avatar" className="avatar" />
      <div className="profile-details">
        <h2>{counselor.name}</h2>
        <p><strong>Description:</strong> {counselor.description}</p>
        <p><strong>Email:</strong> {counselor.email}</p>
        <p><strong>Phone:</strong> {counselor.phone}</p>
        <p><strong>Office Hours:</strong> {counselor.officeHours}</p>
        <p><strong>Location:</strong> {counselor.location}</p>
        <p>{counselor.bio}</p>
        {/* Add more details about the counselor here */}
      </div>
    </div>
  );
};

export default CounselorProfile;
