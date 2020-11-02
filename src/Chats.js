import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className='chats'>
            <Chat
              name='Sarah'
              message='Hey! how are you❤️'
              timestamp='40 seconds ago'
              profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZrpGgB9rjEwnWufcxnZfxAbUxv0V8F6u0Bg&usqp=CAU'
            />
            <Chat
              name='Ellen'
              message='whats up?❤️'
              timestamp='40 minutes ago'
              profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg/330px-Elli_Avram_graces_the_Elle_Beauty_Awards_2016_%2815%29.jpg'
            />
            <Chat
              name='Jennefier'
              message='Hey! ❤️'
              timestamp='10 seconds ago'
              profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7SnqRBGeF8yEJHCLeTKx5MSF67tD3AKj4Mw&usqp=CAU'
            />
            <Chat
              name='Sakira'
              message='how are you ❤️'
              timestamp='45 minutes ago'
              profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Shakira.JPG/800px-Shakira.JPG'
            />
        </div>
    )
}

export default Chats
