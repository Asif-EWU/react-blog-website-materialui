import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const comment = props.comment;
    const {id, name, email, body} = comment;

    return (
        <div className="comment">
            <div className="user">
                <div className="user-image">
                    <img src={`https://picsum.photos/id/${id}/100.jpg`} alt=""/> 
                </div>
                <div className="user-info">
                    <h4 className="user-name">{name}</h4>
                    <h6 className="email">{email}</h6>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;