// AddPet.js
import React, { useState } from 'react';
import '../../styles/components/AddPet.scss';

function AddPet({ onAddPet }) {
    const [petName, setPetName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPet(petName);
        setPetName(''); // Reset input after submission
    };

    return (
        <div className="add-pet-modal">
            <form onSubmit={handleSubmit} className="add-pet-modal__form">
                <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="add-pet-modal__input"
                    placeholder="Pet's Name"
                    required
                />
                <button type="submit" className="add-pet-modal__submit">Save</button>
            </form>
        </div>
    );
}

export default AddPet;
