// PetManagement.js
import React, { useState } from 'react';
import '../../styles/components/PetManagement.scss';
import AddPet from "../AddPet/AddPet";

function PetManagement() {
    const [pets, setPets] = useState([]);
    const [isAddPetOpen, setIsAddPetOpen] = useState(false);

    const addPet = (petName) => {
        setPets([...pets, petName]);
        setIsAddPetOpen(false); // Close modal after adding
    };

    return (
        <div className="pet-management">
            <button onClick={() => setIsAddPetOpen(true)} className="pet-management__add-btn">Add Pet</button>
            {isAddPetOpen && <AddPet onAddPet={addPet} />}
            <div className="pet-management__pets-list">
                {pets.map((pet, index) => (
                    <div key={index} className="pet-icon">{pet}</div>
                ))}
            </div>
        </div>
    );
}

export default PetManagement;
