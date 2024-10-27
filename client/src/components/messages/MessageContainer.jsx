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
    // Cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex-1 flex flex-col bg-gray-600 bg-opacity-50 backdrop-blur-md border-l border-gray-400 rounded-r-lg">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-700 bg-opacity-70 px-4 py-3 flex items-center justify-between">
            <span className="text-gray-300">To:</span>
            <span className="text-gray-100 font-semibold">
              {selectedConversation.name}
            </span>
          </div>

          {/* Messages Section */}
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-600">
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
    <div className="flex items-center justify-center w-full h-full text-gray-300">
      <div className="text-center">
        <p className="text-lg md:text-xl font-semibold">
          Welcome, 👋 {authUser.name}!
        </p>
        <p className="mb-2">Select a chat to start messaging</p>
        <TiMessages className="text-5xl md:text-6xl text-gray-500" />
      </div>
    </div>
  );
};
