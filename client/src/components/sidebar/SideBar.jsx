// Sidebar.jsx
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./Searchinput";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-80 md:w-96 flex flex-col p-4 bg-transparent">
      {/* Search Input */}
      <SearchInput />

      {/* Divider */}
      <div className="my-4 border-b border-glass-border"></div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <Conversations />
      </div>

      {/* Logout Button */}
      <LogoutButton className="mt-4" />
    </div>
  );
};

export default Sidebar;
