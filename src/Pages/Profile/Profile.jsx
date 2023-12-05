import AboutCard from "./ProfileComponents/AboutCard";
import DonationHistoryCard from "./ProfileComponents/DonationHistoryCard";
import ProfileAvatarCard from "./ProfileComponents/ProfileAvatarCard";

const Profile = () => {
  return (
    <div className="container mx-auto p-4 bg-[#F9F9F9] rounded-xl">
      <div className="grid lg:grid-cols-6 gap-10">
        {/* Left Side */}
        <div className=" lg:col-span-4">
          <div className="bg-white rounded-xl  shadow">
            <ProfileAvatarCard />
          </div>
          <div className="bg-white rounded-xl  shadow mt-10">
            <AboutCard />
          </div>
        </div>

        {/* Right Side  */}
        <div className=" lg:col-span-2 flex lg:flex-col flex-wrap items-center justify-evenly gap-5">
          <div className="bg-white rounded-xl  shadow w-80">
            <DonationHistoryCard />
          </div>
          <div className="bg-white rounded-xl  shadow w-80 lg:mt-5">
            <DonationHistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
