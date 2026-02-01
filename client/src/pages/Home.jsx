// Home.jsx
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white p-4">
      <div className="flex w-full max-w-6xl h-[85vh] rounded-2xl glass-morphism overflow-hidden shadow-2xl">
        <Sidebar />
        <div className="w-px bg-glass-border"></div>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
