import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../Images/default-profile-image.jpg";
import { removeMessage } from "../store/actions/messages";

const MessageItem = ({date, profileImageURL, text, username, isCorrectUser}) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageURL || DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image"/>
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                <Moment className="text-muted" format="DD MMM YYYY">{date}</Moment>
                </span>
                <p>{text}</p>
                {isCorrectUser && (
                    <a className="btn btn-danger" onClick={removeMessage}>Delete</a>
                )}
            </div>
        </li>    
    </div>
);

export default MessageItem;
