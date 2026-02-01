// MessageContainer.jsx
import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex-1 flex flex-col bg-transparent">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-glass-light px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-glass-border">
            <span className="text-gray-300">To:</span>
            <span className="text-white font-bold text-lg ml-2">
              {selectedConversation.name}
            </span>
          </div>

          {/* Messages Section */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <Messages />
          </div>

          {/* Message Input */}
          <div className="px-6 py-4 bg-glass-light border-t border-glass-border backdrop-blur-sm">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full text-white">
      <div className="text-center p-8 bg-glass-light rounded-2xl border border-glass-border shadow-xl backdrop-blur-sm">
        <p className="text-2xl font-bold mb-2">
          Welcome, 👋 {authUser.name}!
        </p>
        <p className="text-gray-300 mb-6">Select a chat to start messaging</p>
        <TiMessages className="text-6xl text-primary mx-auto animate-bounce" />
      </div>
    </div>
  );
};
