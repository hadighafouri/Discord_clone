import React from 'react';
import './ChatHeader.css';
import {
	EditLocationRounded,
	HelpRounded,
	NotificationImportant,
	PeopleAltRounded,
	SearchRounded,
	SendRounded
} from '@material-ui/icons';

const ChatHeader = ({ channelName }) => {
	return (
		<div className="chatHeader">
			<div className="chatHeader__left">
				<h3>
					#
					<span>{channelName}</span>
				</h3>
			</div>
			<div className="chatHeader__right">
				<NotificationImportant />
				<EditLocationRounded />
				<PeopleAltRounded />
				<div className="chatHeader__search">
					<input placeholderSeatch />
					<SearchRounded />
					<SendRounded />
					<HelpRounded />
				</div>
			</div>
		</div>
	);
};

export default ChatHeader;
