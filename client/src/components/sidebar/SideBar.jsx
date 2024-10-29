// Sidebar.jsx
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./Searchinput";

const Sidebar = () => {
  return (
    <div className="w-72 sm:w-80 md:w-96 flex flex-col p-4 bg-gray-600 bg-opacity-50 backdrop-blur-md border-r border-gray-400 rounded-l-lg">
      {/* Search Input */}
      <SearchInput />

      {/* Divider */}
      <div className="my-4 border-b border-gray-600"></div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>

      {/* Logout Button */}
      <LogoutButton className="mt-4" />
    </div>
  );
};

export default Sidebar;
