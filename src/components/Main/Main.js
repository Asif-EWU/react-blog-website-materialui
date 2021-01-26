import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Image from '../../images/profile.png';
import SinglePost from '../SinglePost/SinglePost';
import './Main.css';

const Main = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    console.log(posts[0]);

    return (
        <div className="main">
            <div className="profile">
                <img src={Image} alt=""/>
                <h2 style={{color: "grey"}}>Asif Mohammad</h2>
                <p>
                    Open source enthusiast. Software Engineer with Red Hat working on Fedora. Design is not just how it looks like. 
                </p>
                <p>
                    <span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    Dhaka, Bangladesh
                </p>
                <p>
                    <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                    Email
                </p>
            </div>
            <div className="post-list">
                {
                    posts.map(post => <SinglePost key={post.id.toString()} post={post} />)
                }
            </div>
        </div>
    );
};

export default Main;