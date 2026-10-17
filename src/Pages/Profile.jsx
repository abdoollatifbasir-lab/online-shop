import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1>Profile</h1>
        <div className="space-y-4">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                    Name
                </label>
                <p className="text-gray-900">{user?.name}</p>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                    Email
                </label>
                <p className="text-gray-900">{user?.email}</p>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                    Role
                </label>
                <p className="text-gray-900">{user?.role}</p>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                    Avatar
                </label>
               <img src={user?.avatar} alt="" className="w-24 h-24 rounded-full object-cover"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
