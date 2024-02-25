// DisplayPetDetails.js
import React from 'react';
import '../../styles/components/DisplayPetDetails.scss';

function DisplayPetDetails({ pet, onClose }) {
    return (
        <div className="pet-details-modal">
            <div className="pet-details-modal__content">
                <img src={pet.icon} alt={pet.name} className="pet-details-modal__icon" />
                <h3>{pet.name}</h3>
                <p>Breed: {pet.breed}</p>
                <p>Date of Birth: {pet.dob}</p>
                <p>Allergies: {pet.allergies}</p>
                <div className="pet-details-modal__appointments">
                    {/* Assuming appointments is an array of appointment details */}
                    {pet.appointments && pet.appointments.map((appointment, index) => (
                        <div key={index} className="pet-details-modal__appointment">
                            <p>{appointment.type} on {appointment.date}</p>
                        </div>
                    ))}
                </div>
                <button onClick={onClose} className="pet-details-modal__close-btn">Close</button>
            </div>
        </div>
    );
}

export default DisplayPetDetails;
