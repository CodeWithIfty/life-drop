import AboutCard from "./ProfileComponents/AboutCard";
import ProfileAvatarCard from "./ProfileComponents/ProfileAvatarCard";

const Profile = () => {
  return (
    <div className="container mx-auto p-4 bg-[#F9F9F9] rounded-xl">
      <div className="grid grid-cols-6 gap-10">
        {/* Left Side */}
        <div className=" col-span-4">
          <div className="bg-white rounded-xl  shadow">
            <ProfileAvatarCard />
          </div>
          <div className="bg-white rounded-xl  shadow mt-10">
            <AboutCard />
          </div>
        </div>

        {/* Right Side  */}
        <div className="bg-blue-600 col-span-2"> Right Side</div>
      </div>
    </div>
  );
};

export default Profile;
