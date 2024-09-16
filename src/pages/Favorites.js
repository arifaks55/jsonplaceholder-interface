import React from 'react';
import { useFavoritesStore } from '../store/favoritesStore';

const Favorites = () => {
    const { photos, posts, removePhoto, removePost } = useFavoritesStore();

    return (
        <div>
            <h1>Favori Postlar</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={() => removePost(post.id)}>Favorilerden Kaldır</button>
                    </li>
                ))}
            </ul>

            <h1>Favori Albümler</h1>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        {photo.title}
                        <button onClick={() => removePhoto(photo.id)}>Favorilerden Kaldır</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
