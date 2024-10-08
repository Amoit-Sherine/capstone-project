import React, { useState } from 'react';
import '../../styles/components/AddAppointment.scss';
import {API_URL} from "../../values";

// Assume `pets` is passed as a prop or fetched from global state/context
function AddAppointment({ onSave, onClose, pets }) {
    const [selectedPet, setSelectedPet] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const appointmentDateTime = new Date(`${date}T${time}`);
        const now = new Date();

        if (appointmentDateTime <= now) {
            alert("Please select a future date and time for the appointment.");
            return;
        }

        fetch(`${API_URL}/appointments`, {
            method: 'POST',
            body: JSON.stringify({
                pet_id: selectedPet,
                date_time: appointmentDateTime,
                type: appointmentType,
                location
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                const isOk = response.ok

                response.json().then(resp => {
                    if(isOk){
                        onSave({
                            pet: pets.find(pet => pet.id == selectedPet),
                            type: appointmentType,
                            date: `${date} ${time}`,
                            location,
                        });
                    }else{
                        alert(resp.message)
                        throw new Error(resp.message);
                    }
                })

            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="add-appointment-modal">
            <div className="add-appointment-modal__content">
                <form onSubmit={handleSubmit} className="add-appointment-modal__form">
                    <select value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)} className="form-input">
                        <option value="">Select a Pet</option>
                        {(pets || []).map((pet, index) => (
                            <option key={index} value={pet.id}>{pet.name}</option>
                        ))}
                    </select>
                    <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)} className="form-input">
                        <option value="">Select Appointment Type</option>
                        <option value="Wellness Exams">Wellness Exams</option>
                        <option value="Vaccination Appointments">Vaccination Appointments</option>
                        <option value="Dental Care">Dental Care</option>
                        <option value="Grooming">Grooming</option>
                        <option value="Nutritional Counseling">Nutritional Counseling</option>
                        <option value="Geriatric Care">Geriatric Care</option>

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
