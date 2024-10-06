import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked'; // Import the marked library
import './chatBox.scss';

const ChatBox = ({ onClose, planet }) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [sessionId, setSessionId] = useState(null); // Store sessionId after first response
  const [isLoading, setIsLoading] = useState(false); // For showing loading state
  const chatBodyRef = useRef(null); 

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]); // This effect runs whenever the messages state changes

  // Handle message submission
  const sendMessage = async () => {
    if (!userMessage.trim()) return; // Prevent sending empty messages

    const requestBody = {
      planetName: planet,
      userQuestion: userMessage,
    };

    // If we have a sessionId, include it in the request
    if (sessionId) {
      requestBody.sessionId = sessionId;
    }

    try {
      setIsLoading(true); // Start loading state

      // Send POST request to the server
      const response = await fetch('https://mobile.codeunion.kz/stellar-quest/api/dialog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // Update messages with both user question and server response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userMessage },
        { sender: 'bot', text: data.response }, // Assuming the server responds with a 'responseMessage'
      ]);

      // If sessionId is returned by the server, store it for future messages
      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      setUserMessage(''); // Clear input field
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  // Handle Enter key for sending the message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>Chat with {planet}</h3>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.length === 0 ? (
          <p>Welcome to the chat!</p>
        ) : (
            messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.sender === 'bot' ? (
                    <>
                      <strong>{planet}:</strong> {/* Display the planet name */}
                      <p dangerouslySetInnerHTML={{ __html: marked(msg.text) }} />
                    </>
                  ) : (
                    <p>{msg.text}</p> // User message does not need planet name
                  )}
                </div>
              ))
              
        )}
        {isLoading && <p>Loading...</p>} {/* Show loading when waiting for response */}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
