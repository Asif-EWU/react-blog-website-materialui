import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from '../../images/profile.png';
import './Profile.css';

const Profile = () => {
    return (
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
    );
};

export default Profile;