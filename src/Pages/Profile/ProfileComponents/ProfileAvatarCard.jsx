import { FaRegBell } from "react-icons/fa";

const ProfileAvatarCard = () => {
  return (
    <div className="p-8 grid md:grid-cols-4 justify-center items-center  md:items-end gap-5 md:gap-20">
      {/* Avatar */}
      <div className="w-40 h-40 bg-[#F9F9F9] rounded-xl shadow col-span-1 overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt=""
        />
      </div>

      {/* Name */}
      <div className="col-span-2">
        <h1 className="text-3xl font-bold text-black">Dinoy Raj K</h1>{" "}
      </div>

      {/* Notification icon and edit button */}
      <div className="col-span-1 flex justify-end items-center gap-5">
        <div className="text-2xl cursor-pointer">
          <FaRegBell />
        </div>
        <div className="">
          <button className="px-5 py-1 text-white bg-black rounded-xl">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarCard;
