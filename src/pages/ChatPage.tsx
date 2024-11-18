import ChatComponent from '../components/chat/index'; // Importing the chat component

function ChatPage() {
    return (
        <div className="App bg-gray-200 h-screen w-screen px-[20px] flex">
            <ChatComponent className="w-full h-full" /> {/* Adjusting the chat component to take full screen */}
        </div>
    );
}

export default ChatPage
