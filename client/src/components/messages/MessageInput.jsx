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
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-16"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 flex items-center gap-2 pe-3">
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-400 hover:text-white"
          >
            <BsEmojiSmile size={20} />
          </button>
          <button type="submit">
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
        {showEmojiPicker && (
          <div className="absolute bottom-full right-0 mb-2">
            <EmojiPicker onEmojiClick={onEmojiClick} width={300} height={400} />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
