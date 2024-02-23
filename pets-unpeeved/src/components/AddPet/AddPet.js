// AddPet.js
import React, { useState } from 'react';
import '../../styles/components/AddPet.scss';


const defaultPetImages = [
    '/path/to/your/assets/pet1.jpg', // Replace these with actual paths to your pet images in your assets
    '/path/to/your/assets/pet2.jpg',
    // Add more as needed
];

function AddPet({ onClose, onAddPet }) {
    const [petName, setPetName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [petType, setPetType] = useState('');
    const [allergies, setAllergies] = useState('');
    const [petImage, setPetImage] = useState(defaultPetImages[Math.floor(Math.random() * defaultPetImages.length)]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPet({ name: petName, dob: dateOfBirth, breed, type: petType, allergies, image: petImage });
        onClose();
    };

    return (
        <div className="add-pet-modal">
            <div className="add-pet-modal__content">
                <form onSubmit={handleSubmit} className="add-pet-modal__form">
                    {/* Include additional fields here */}
                    <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Pet's Name" required />
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" required />
                    <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed" required />
                    <input type="text" value={petType} onChange={(e) => setPetType(e.target.value)} placeholder="Pet Type" required />
                    <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="Allergies" required />
                    <button type="submit" className="add-pet-modal__submit">Save</button>
                    <button type="button" onClick={onClose} className="add-pet-modal__cancel">Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddPet;