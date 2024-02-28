import React, {useEffect, useState} from 'react';
import '../../styles/components/UserProfile.scss';
import {API_URL} from "../../values";
import {useNavigate} from "react-router-dom";

function UserProfile() {
    const [userInfo, setUserInfo] = useState({ });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        // for file handling logic
    };

    const fetchProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                const isOk = response.ok

                response.json().then(resp => {
                    if(isOk){
                        setUserInfo(resp)
                    }else{
                        alert(resp.message)
                        throw new Error(resp.message);
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API_URL}/profile`, {
            method: 'POST',
            body: JSON.stringify({...userInfo}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                const isOk = response.ok

                response.json().then(resp => {
                    alert(resp.message)

                    if(!isOk){
                        throw new Error(resp.message);
                    }
                })

            })
            .catch(error => {
                console.log(error)
            })

    };

    const signOut = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(fetchProfile, []);

    return (
        <div className="user-profile">
            <form onSubmit={handleSubmit}>
                <label htmlFor="profile-image">
                    Profile Image:
                    <input type="file" id="profile-image" name="profileImage" onChange={handleFileChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={userInfo.age} onChange={handleChange} />
                </label>
                <label>
                    Hobbies:
                    <input type="text" name="hobbies" value={userInfo.hobbies} onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={userInfo.location} onChange={handleChange} />
                </label>
                <label>
                    Email (prefilled, not editable):
                    <input type="email" name="email" value={userInfo.email} readOnly />
                </label>
                <button type="submit" className="edit-btn">Save</button>
                <button type="button" className="sign-out-btn" onClick={signOut}>Sign Out</button>
            </form>
        </div>
    );
}

export default UserProfile;
