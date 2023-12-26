"use client"
import React, { useState } from 'react';
import ChatBox from './ChatBox';

const BotButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCloseChatBox = () => {
    setIsClicked(false);
  };

  return (
    <div>
      {isClicked ? (
        <ChatBox  onClose={handleCloseChatBox} />
        
      ) : (
        <div onClick={() => setIsClicked(true)} className='cursor-pointer w-12 h-12 bg-black z-30 absolute bottom-12 right-12'>
          
        </div>
      )}
      
      
    </div>
  );
};

export default BotButton;
