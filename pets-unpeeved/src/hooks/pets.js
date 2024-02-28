import {useEffect, useState} from "react";
import {API_URL} from "../values";
// Importing pet images directly
import dogIcon from '../assets/pet-icons/dog2.jpeg';
import catIcon from '../assets/pet-icons/cat2.jpeg';
import birdIcon from '../assets/pet-icons/bird.jpeg';
import snakeIcon from '../assets/pet-icons/snake.jpeg';

const usePets = () => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/pets`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                const isOk = response.ok

                response.json().then(resp => {
                    if(isOk){
                        setPets(resp)
                    }else{
                        alert(resp.message)
                        throw new Error(resp.message);
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })

    }, []);

    return pets
}

function usePetIcons(){
    return {
        dog: dogIcon,
        cat: catIcon,
        bird: birdIcon,
        snake: snakeIcon,
    };
}

export { usePets, usePetIcons }