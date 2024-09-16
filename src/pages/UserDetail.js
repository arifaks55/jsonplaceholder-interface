import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, [userId]);

    const fetchPosts = async () => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    };

    const fetchAlbums = async () => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const data = await response.json();
        setAlbums(data);
        setLoading(false);
    };

    const fetchTodos = async () => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
        const data = await response.json();
        setTodos(data);
        setLoading(false);
    };

    return (
        <div className="container mt-4">
            <h1>Kullanıcı Detayları: {user ? user.name : 'Yükleniyor...'}</h1>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Telefon:</strong> {user?.phone}</p>
            <p><strong>Şirket:</strong> {user?.company?.name}</p>

            <Tabs defaultActiveKey="posts" id="user-tabs" className="mb-3">
                <Tab eventKey="posts" title="Postlar">
                    {loading ? <p>Yükleniyor...</p> : <button className="btn btn-primary mb-3" onClick={fetchPosts}>Postları Yükle</button>}
                    <div className="list-group">
                        {posts.map((post) => (
                            <div className="list-group-item" key={post.id}>
                                <Link to={`/users/${userId}/posts/${post.id}`}>
                                    <h5>{post.title}</h5>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        ))}
                    </div>
                </Tab>

                <Tab eventKey="albums" title="Albümler">
                    {loading ? <p>Yükleniyor...</p> : <button className="btn btn-primary mb-3" onClick={fetchAlbums}>Albümleri Yükle</button>}
                    <div className="list-group">
                        {albums.map((album) => (
                            <div className="list-group-item" key={album.id}>
                                <Link to={`/users/${userId}/albums/${album.id}`}>
                                    <h5>{album.title}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Tab>

                <Tab eventKey="todos" title="Yapılacaklar">
                    {loading ? <p>Yükleniyor...</p> : <button className="btn btn-primary mb-3" onClick={fetchTodos}>Yapılacakları Yükle</button>}
                    <div className="list-group">
                        {todos.map((todo) => (
                            <div className="list-group-item" key={todo.id}>
                                <p>{todo.title} {todo.completed ? "(Tamamlandı)" : "(Tamamlanmadı)"}</p>
                            </div>
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default UserDetail;
