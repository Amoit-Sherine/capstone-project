import React, { useState } from 'react';
import '../../styles/components/AddAppointment.scss';

function AddAppointment({ pets, onSave, onClose }) {
    const [selectedPet, setSelectedPet] = useState(pets.length > 0 ? pets[0].name : '');
    const [appointmentType, setAppointmentType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // This should include a method to save the appointment in the database
        onSave({
            pet: pets.find(pet => pet.name === selectedPet),
            type: appointmentType,
            date: `${date} ${time}`,
            location,
        });
        onClose();
    };

    return (
        <div className="add-appointment-modal">
            <div className="add-appointment-modal__content">
                <form onSubmit={handleSubmit} className="add-appointment-modal__form">
                    <select value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)} className="add-appointment-modal__input">
                        {pets.map((pet, index) => (
                            <option key={index} value={pet.name}>{pet.name}</option>
                        ))}
                    </select>
                    <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)} className="add-appointment-modal__input">
                        <option value="">Select Appointment Type</option>
                        <option value="Wellness Exams">Wellness Exams</option>
                        <option value="Vaccination Appointments">Vaccination Appointments</option>
                        <option value="Spay/Neuter Appointments">Spay/Neuter Appointments</option>
                        {/* Add other appointment types here */}
                    </select>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="add-appointment-modal__input" />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required className="add-appointment-modal__input" />
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required className="add-appointment-modal__input" />
                    <div className="add-appointment-modal__actions">
                        <button type="button" onClick={onClose} className="add-appointment-modal__button add-appointment-modal__button--close">Close</button>
                        <button type="submit" className="add-appointment-modal__button add-appointment-modal__button--save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAppointment;
