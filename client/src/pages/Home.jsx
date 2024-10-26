import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-w-96 mx-auto min-h-screen sm:h-[450px] md:h-[800px] rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
