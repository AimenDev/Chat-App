// Home.jsx
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-w-full min-h-screen bg-transparent p-4">
      <div className="flex w-full max-w-7xl min-h-[450px] md:min-h-[800px] rounded-lg overflow-hidden bg-transparent shadow-lg">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
