// PetManagement.js
import React, { useState } from 'react';
import '../../styles/components/PetManagement.scss';
import AddPet from "../AddPet/AddPet";

// PetManagement.js
function PetManagement() {
    const [pets, setPets] = useState([]);
    const [isAddPetOpen, setIsAddPetOpen] = useState(false);

    const handleAddPet = (pet) => {
        setPets([...pets, pet]);
        setIsAddPetOpen(false);
    };

    return (
        <div className="pet-management">
            <button onClick={() => setIsAddPetOpen(true)} className="pet-management__add-btn">Add Pet</button>
            {isAddPetOpen && <AddPet onClose={() => setIsAddPetOpen(false)} onAddPet={handleAddPet} />}
            <div className="pet-management__grid">
                {pets.map((pet, index) => (
                    <div key={index} className="pet-management__grid-item" onClick={() => {/* Handle click, perhaps open PetDetails */}}>
                        <img src={pet.image} alt={pet.name} className="pet-icon" />
                        {/* Additional pet details can be shown on click */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetManagement;