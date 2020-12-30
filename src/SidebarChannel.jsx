import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import './SidebarChannel.css';
const SidebarChannel = ({ id, channelName }) => {
	const dispatch = useDispatch();
	return (
		<div
			className="sidebarChannel"
			onClick={() =>
				dispatch(
					setChannelInfo({
						channelId: id,
						channelName: channelName
					})
				)}
		>
			<h4>
				<span>{channelName}</span>
			</h4>
		</div>
	);
};

export default SidebarChannel;