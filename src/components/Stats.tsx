"use client";
import CountUp from "react-countup";
const statsData = [
  {
    value: 1.2,
    type: "Hotels",
    unit: "k",
  },
  {
    value: 4.8,
    type: "Rooms",
    unit: "k",
  },
  {
    value: 186,
    type: "Countries",
    unit: null,
  },
];

const Stats = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10'>
      {statsData.map((item, index) => (
        <div className='flex' key={index}>
          <div className='flex items-baseline gap-x-2'>
            <h3 className='h3 text-soft_green'>
              <CountUp
                start={0}
                end={item.value}
                decimals={item.value % 1 !== 0 ? 1 : 0}
                duration={6}
              />
              <span>{item.unit}</span>
            </h3>
            <div className='font-semibold text-black '>{item.type}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
