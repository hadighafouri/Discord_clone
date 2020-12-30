import { Avatar } from '@material-ui/core';
import { TodayTwoTone } from '@material-ui/icons';
import React from 'react';
import './Message.css';

const Message = ({ user, message, timestamp }) => {
	return (
		<div className="message">
			<Avatar src={user.photo} />
			<div className="message__info">
				<h4>
					{user.displayName}
					<span className="message__time">{timestamp && new Date(timestamp.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Message;
