import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="tooltip tooltip-right" data-tip="Logout">
          <BiLogOut
            className="w-7 h-7 text-gray-300 hover:text-secondary cursor-pointer transition-all duration-300 transform hover:scale-110"
            onClick={logout}
          />
        </div>
      ) : (
        <span className="loading loading-spinner text-white"></span>
      )}
    </div>
  );
};
export default LogoutButton;
