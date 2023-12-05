const AboutCard = () => {
  const profileInfo = [
    { title: "Full Name", info: "Dinoy Raj K" },
    { title: "Email", info: "dinoykraj@gamil.com" },
    { title: "District", info: "Kozhikode" },
    { title: "Phone Number", info: "7306185390" },
    { title: "Pincode", info: "673014" },
    { title: "Age", info: "21" },
    { title: "Blood Group", info: "o +ve" },
    { title: "Address", info: "Karuvally Reenugeetham House..." },
    { title: "Last Donation Date", info: "11 - 10 - 2021" },
  ];

  return (
    <div className="w-full">

      <div className="flex justify-center items-center p-3">
        <h4 className="text-2xl font-semibold">About</h4>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 text-right ">

          {profileInfo.map(({ title }) => (
            <div className="" key={title}>
              <h4 className="mr-10 p-2">{title}</h4>
              <hr />
            </div>
          ))}
        </div>

        <div className="w-1/2">
          {profileInfo.map(({ info }) => (
            <div className="" key={info}>
              <h5 className="ml-10 p-2">{info}</h5>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
