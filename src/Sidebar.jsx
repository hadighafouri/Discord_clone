import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import './Sidebar.css';
import SidebarChannel from './SidebarChannel';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';

function Sidebar() {
	const user = useSelector(selectUser);
	const [ channels, setChannels ] = useState([]);

	useEffect(() => {
		db.collection('channels').onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					channel: doc.data()
				}))
			);
		});
	}, []);

	const handleAddChannel = () => {
		const channelName = prompt('Enter a new channel name');
		if (channelName) {
			db.collection('channels').add({
				channelName: channelName
			});
		}
	};

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Smart programmer</h3>
				<AddIcon onClick={handleAddChannel} />
			</div>
			<div className="sidebar__channels">
				<div className="sidebar__header">
					<h4>Channels</h4>
					<ExpandMoreIcon className="sidebar__expandicon" />
				</div>

				<div className="sidebar__channelsList">
					{channels.map(({ id, channel }) => (
						<SidebarChannel key={id} id={id} channelName={channel.channelName} />
					))}
				</div>
			</div>

			<div className="voice">
				<div className="sidebar__voiceIcons">
					<NetworkCheckIcon />
				</div>
				<div className="sidebar__voiceInfo">
					<h3>Voice Connected</h3>
					<p>Steam</p>
				</div>
				<div className="sidebar__voicecall">
					<InfoIcon />
					<CallIcon />
				</div>
			</div>

			<div className="sidebar__profile">
				<Avatar
					src={user.photo}
					onClick={() => {
						auth.signOut();
					}}
				/>
				<div className="sidebar__profileInfo">
					<h3>{user.displayName}</h3>
					<p>#{user.uid.substring(0, 5)}</p>
				</div>
				<div className="sidebar__profileIcons">
					<MicIcon />
					<HeadsetIcon />
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
