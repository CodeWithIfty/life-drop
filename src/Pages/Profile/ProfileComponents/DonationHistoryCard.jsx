const DonationHistoryCard = () => {
  const donationInfo = [
    { date: "13 Dec 2020", units: 120 },
    { date: "28 Nov 2020", units: 20 },
    { date: "04 Nov 2020", units: 40 },
    { date: "15 Oct 2020", units: 310 },
    { date: "13 Dec 2020", units: 120 },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-center items-center p-5">
        <h4 className="text-2xl ">Donation History</h4>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 ">
          <h4 className="ml-4 p-2 text-gray-400 mb-5">Date</h4>
          {donationInfo.map(({ date }) => (
            <div className="" key={date}>
              <h4 className="ml-4 p-2 text-gray-600">{date}</h4>
              <hr />
            </div>
          ))}
        </div>

        <div className="w-1/2 text-right">
          <h5 className="mr-5 p-2 text-gray-400 mb-5">Blood Units</h5>
          {donationInfo.map(({ units }) => (
            <div className="" key={units}>
              <h5 className="mr-5 p-2 text-gray-600">{units}</h5>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationHistoryCard;
