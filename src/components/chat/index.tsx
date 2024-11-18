import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

const ChatComponent = () => {
    const messages = [
        { message: "Hello my friend", sentTime: "just now", sender: "Joe" },
        { message: "How are you?", sentTime: "2 minutes ago", sender: "Jane" },
        { message: "I'm good, thanks!", sentTime: "1 minute ago", sender: "Joe" },
        { message: "What about you?", sentTime: "30 seconds ago", sender: "Joe" },
        { message: "I'm doing well too!", sentTime: "just now", sender: "Jane" }
    ];

    return (
        <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {messages.map((msg, index) => (
                            <Message key={index} model={msg} />
                        ))}
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};

export default ChatComponent;