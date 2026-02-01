import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = fromMe ? "bg-gradient-to-r from-primary to-accent text-white" : "bg-glass-heavy text-gray-200 border border-glass-border";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full shadow-md border border-glass-border'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleBgColor} ${shakeClass} shadow-md`}>{message.message}</div>
			<div className='chat-footer opacity-70 text-xs flex gap-1 items-center text-gray-400 mt-1'>{formattedTime}</div>
		</div>
	);
};
export default Message;