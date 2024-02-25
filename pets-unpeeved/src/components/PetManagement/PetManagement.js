// PetManagement.js
import React, { useState } from 'react';
import '../../styles/components/PetManagement.scss';
import AddPet from "../AddPet/AddPet";
import DisplayPetDetails from "../DisplayPetDetails/DisplayPetDetails";

function PetManagement() {
    const [pets, setPets] = useState([]);
    const [isAddPetOpen, setIsAddPetOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null); // New state for selected pet

    const handleAddPet = (petDetails) => {
        setPets([...pets, petDetails]);
        setIsAddPetOpen(false);
    };

    const openPetDetails = (pet) => {
        setSelectedPet(pet);
    };

    const closePetDetails = () => {
        setSelectedPet(null);
    };

    return (
        <div className="pet-management">
            <button onClick={() => setIsAddPetOpen(true)} className="pet-management__add-btn">+ Add Pet</button>
            {isAddPetOpen && <AddPet onClose={() => setIsAddPetOpen(false)} onAddPet={handleAddPet} />}
            <div className="pet-management__pets-display">
                {pets.map((pet, index) => (
                    <div key={index} className="pet-management__pet-icon" onClick={() => openPetDetails(pet)}>
                        <img src={pet.icon} alt={pet.name} className="pet-icon__image" />
                        <span className="pet-icon__name">{pet.name}</span>
                    </div>
                ))}
            </div>
            {selectedPet && <DisplayPetDetails pet={selectedPet} onClose={closePetDetails} />}
        </div>
    );
}
export default PetManagement;