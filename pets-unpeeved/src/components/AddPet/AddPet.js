// AddPet.js
import React, { useState } from 'react';
import '../../styles/components/AddPet.scss';
import {API_URL} from "../../values";
import {usePetIcons} from "../../hooks/pets";

function AddPet({ onClose, onAddPet }) {
    const [petType, setPetType] = useState('dog');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [allergies, setAllergies] = useState('');

    const petIconMapping = usePetIcons()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API_URL}/pets`, {
            method: 'POST',
            body: JSON.stringify({
                name: petName,
                type: petType,
                breed: petBreed,
                dob: dateOfBirth,
                allergies,
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
                        onAddPet({
                            type: petType,
                            name: petName,
                            dob: dateOfBirth,
                            breed: petBreed,
                            allergies
                        });
                        onClose();
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
                    <input type="text" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} placeholder="Pet's Breed" required className="add-pet-modal__input" />
                    <textarea value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="Allergies (optional)" className="add-pet-modal__input"></textarea>
                    <div className="add-pet-modal__actions">
                        <button type="button" onClick={onClose} className="add-pet-modal__button add-pet-modal__button--close">Close</button>
                        <button type="submit" className="add-pet-modal__button add-pet-modal__button--save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPet;