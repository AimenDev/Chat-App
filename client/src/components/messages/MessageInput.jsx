import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          className="w-full bg-glass-heavy border border-glass-border text-white text-sm rounded-full block p-4 pr-24 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 flex items-center gap-3 pe-4">
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
          >
            <BsEmojiSmile size={22} />
          </button>
          <button
            type="submit"
            className="text-primary hover:text-white transition-colors transform hover:scale-110"
            disabled={loading}
          >
            {loading ? (
              <div className="loading loading-spinner loading-xs"></div>
            ) : (
              <BsSend size={20} />
            )}
          </button>
        </div>
        {showEmojiPicker && (
          <div className="absolute bottom-14 right-0 z-50 shadow-2xl rounded-xl overflow-hidden glass-morphism">
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              theme="dark"
              width={300}
              height={400}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
