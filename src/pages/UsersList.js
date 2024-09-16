import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

// loader fonksiyonunu dışa aktarıyoruz
export const loader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Veri yüklenirken hata oluştu');
    }
    return response.json();
};

const UsersList = () => {
    const users = useLoaderData(); // useLoaderData ile yüklenen veriyi alıyoruz

    return (
        <div>
            <h1>Kullanıcılar</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
