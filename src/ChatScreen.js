import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg/330px-Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg',
            message: 'whats up ❤️'
        },
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg/330px-Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg',
            message: 'hows it going!'
        },
        {
            message: 'Hi! How are you Dear'
        },
    ]);

    const handleSend = e=> {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    };

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>
                YOU MATCHED WITH ELLEN ON 30/09/20
            </p>
            {messages.map((message) => (
                message.name ? (
                <div className='chatScreen__message'>
                    <Avatar
                       className='chatScreen__image'
                       alt={message.name}
                       src={message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                    <div className='chatScreen__message'>
                       <p className='chatScreen__textuser'>{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className='chatScreen__input'>
                    <input
                       value={input}
                       onChange={e => setInput(e.target.value)}
                       className='chatScreen__inputField'
                       placeholder='Type a message...'
                       type='text'
                    />
                    <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
