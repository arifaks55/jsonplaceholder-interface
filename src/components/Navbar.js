import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesStore } from '../store/favoritesStore';

const Navbar = () => {
    const { photos, posts } = useFavoritesStore();
    const totalFavorites = photos.length + posts.length;

    return (
        <nav>
            <Link to="/">Kullanıcılar</Link>
            <Link to="/favorites">Favoriler ({totalFavorites})</Link>
        </nav>
    );
};

export default Navbar;
