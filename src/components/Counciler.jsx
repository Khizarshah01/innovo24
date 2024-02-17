import React from 'react';
import "../style/Counciler.css";
import emp from './images/employee.svg'
function Counciler() {
    return (
        <>
        <div className='card-tank'>

            <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>

            <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>


        <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>

        </div>
        <div className="card-tank">

        <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>


        <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>


            <div className="card">
                <img src={emp} alt="Avatar" id='card-image' />
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Counciler