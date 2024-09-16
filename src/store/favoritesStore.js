import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
    persist(
        (set) => ({
            photos: [],
            posts: [],

            addPhoto: (photo) => set((state) => ({
                photos: [...state.photos, photo],
            })),

            removePhoto: (photoId) => set((state) => ({
                photos: state.photos.filter(photo => photo.id !== photoId),
            })),

            addPost: (post) => set((state) => ({
                posts: [...state.posts, post],
            })),

            removePost: (postId) => set((state) => ({
                posts: state.posts.filter(post => post.id !== postId),
            })),
        }),
        {
            name: 'favorites-storage', // localStorage key
        }
    )
);
