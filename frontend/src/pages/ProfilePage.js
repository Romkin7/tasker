import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    const { age, email, name, createdAt } = user?.user;
    return (
        <section>
            <h2>Profile page</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>CreatedAt: {new Date(createdAt).toDateString()}</p>
        </section>
    );
};

export default ProfilePage;
