import React, { useState } from 'react';
import '../../styles/components/UserProfile.scss';

function UserProfile({ user, onSave, onSignOut }) {
    const [userInfo, setUserInfo] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(userInfo);
    };

    const handleFileChange = (e) => {
        // for file handling logic
    };

    return (
        <div className="user-profile">
            <form>
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
                <button type="button" className="edit-btn" onClick={handleSave}>Save</button>
                <button type="button" className="sign-out-btn" onClick={onSignOut}>Sign Out</button>
            </form>
        </div>
    );
}

export default UserProfile;
