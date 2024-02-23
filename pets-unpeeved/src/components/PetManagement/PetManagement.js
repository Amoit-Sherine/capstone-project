// PetManagement.js
import React, { useState } from 'react';
import '../../styles/components/PetManagement.scss';
import AddPet from "../AddPet/AddPet";

// PetManagement.js
function PetManagement() {
    const [pets, setPets] = useState([]);
    const [isAddPetOpen, setIsAddPetOpen] = useState(false);

    const handleAddPet = (petDetails) => {
        setPets([...pets, petDetails]);
        setIsAddPetOpen(false);
    };

    return (
        <div className="pet-management">
            <button onClick={() => setIsAddPetOpen(true)} className="pet-management__add-btn">Add Pet</button>
            {isAddPetOpen && <AddPet onClose={() => setIsAddPetOpen(false)} onAddPet={handleAddPet} />}
            <div className="pet-management__pets-display">
                {pets.map((pet, index) => (
                    <div key={index} className="pet-management__pet-icon">
                        <img src={pet.icon} alt={pet.name} className="pet-icon__image" />
                        <span className="pet-icon__name">{pet.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetManagement;