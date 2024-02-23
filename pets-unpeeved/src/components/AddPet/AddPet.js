// AddPet.js
import React, { useState } from 'react';
import '../../styles/components/AddPet.scss';

// Importing pet images directly
import dogIcon from '../../assets/pet-icons/dog.jpeg';
import catIcon from '../../assets/pet-icons/cat.jpeg';
import birdIcon from '../../assets/pet-icons/dog.jpeg';
import snakeIcon from '../../assets/pet-icons/cat.jpeg';

const petIconMapping = {
    dog: dogIcon,
    cat: catIcon,
    bird: birdIcon,
    snake: snakeIcon,
};

function AddPet({ onClose, onAddPet }) {
    const [petType, setPetType] = useState('dog');
    const [petName, setPetName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPet({
            type: petType,
            name: petName,
            dob: dateOfBirth,
            allergies,
            icon: petIconMapping[petType],
        });
        onClose();
    };

    return (
        <div className="add-pet-modal">
            <div className="add-pet-modal__content">
                <img src={petIconMapping[petType]} alt="Pet" className="add-pet-modal__icon" />
                <form onSubmit={handleSubmit} className="add-pet-modal__form">
                    <select value={petType} onChange={(e) => setPetType(e.target.value)} className="add-pet-modal__input">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="snake">Snake</option>
                    </select>
                    <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Pet's Name" required className="add-pet-modal__input" />
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required className="add-pet-modal__input" />
                    <textarea value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="Allergies (optional)" className="add-pet-modal__input"></textarea>
                    <button type="submit" className="add-pet-modal__submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default AddPet;