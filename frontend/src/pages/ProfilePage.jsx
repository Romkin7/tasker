import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    const { age, email, name, createdAt } = user;
    return (
        <section>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>CreatedAt: {new Date(createdAt).toDateString()}</p>
        </section>
    );
};

export default ProfilePage;
