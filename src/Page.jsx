import React, { useEffect, useState } from 'react';
import './Page.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';

const Page = () => {
	const user = useSelector(selectUser);
	const channelName = useSelector(selectChannelName);
	const channelId = useSelector(selectChannelId);
	const [ input, setInput ] = useState('');
	const [ messages, setMessages ] = useState([]);

	useEffect(
		() => {
			if (channelId) {
				db
					.collection('channels')
					.doc(channelId)
					.collection('messages')
					.orderBy('timestamp', 'desc')
					.onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
			}
		},
		[ channelId ]
	);

	const sendMessage = (e) => {
		e.preventDefault();
		db.collection('channels').doc(channelId).collection('messages').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			user: user
		});
		setInput('');
	};

	return (
		<div className="page">
			<ChatHeader channelName={channelName} />
			<div className="page__messages">
				{messages.map((message) => {
					return <Message message={message.message} user={message.user} timestamp={message.timestamp} />;
				})}
			</div>
			<div className="page__input">
				<AddCircle />
				<form>
					<input
						disabled={!channelName}
						placeholder="Message"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>

					<button className="page__button" type="submit" onClick={sendMessage}>
						Send
					</button>
				</form>
				<div className="page__inputIcons">
					<CardGiftcard />
					<Gif />
					<EmojiEmotions />
				</div>
			</div>
		</div>
	);
};

export default Page;
