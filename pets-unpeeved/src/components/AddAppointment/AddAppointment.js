import React, { useState } from 'react';
import '../../styles/components/AddAppointment.scss';

// Assume `pets` is passed as a prop or fetched from global state/context
function AddAppointment({ onSave, onClose, pets }) {
    const [selectedPet, setSelectedPet] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            pet: pets.find(pet => pet.name === selectedPet),
            type: appointmentType,
            date: `${date} ${time}`,
            location,
        });
    };

    return (
        <div className="add-appointment-modal">
            <div className="add-appointment-modal__content">
                <form onSubmit={handleSubmit} className="add-appointment-modal__form">
                    <select value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)} className="form-input">
                        <option value="">Select a Pet</option>
                        {pets.map((pet, index) => (
                            <option key={index} value={pet.name}>{pet.name}</option>
                        ))}
                    </select>
                    <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)} className="form-input">
                        <option value="">Select Appointment Type</option>
                        {/* Add options here */}
                    </select>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input" />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-input" />
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="form-input" />
                    <div className="actions">
                        <button type="button" onClick={onClose} className="action-btn close">Close</button>
                        <button type="submit" className="action-btn save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAppointment;
