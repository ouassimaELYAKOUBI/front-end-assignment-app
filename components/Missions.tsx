'use client'
import React, { useState } from 'react';
import { missions } from '@/constants';
import Image from 'next/image';

const Missions = () => {
  // State to track whether description is visible for each mission
  const [showDescription, setShowDescription] = useState({});

  // Function to toggle description visibility for a specific mission
  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index] // Toggle visibility
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 md:pb-6">
      {missions?.map((item, index) => (
        <div key={item.icon} className="w-10/12 max-w-[552px] flex flex-col items-end justify-end border-b border-[#13171D] pb-4 md:pb-6">
          <div className="w-full flex flex-row gap-x-10 items-center justify-start">
            <div className="flex items-center justify-center relative">
              <Image src={item.border} alt="" width={100} height={114} className="" />
              <Image src={item.shape1} alt="" width={68} height={76} className="absolute " />
              <Image src={item.shape2} alt="" width={56} height={62} className="absolute " />
              <Image src={item.icon} alt="" width={26} height={26} className="absolute " />
            </div>

            <div className="flex flex-1 justify-between items-baseline ">
              <h1 className="text-xl font-bold font-satoshi w-11/12">{item.title}</h1>
              {/* Toggle arrow direction based on showDescription state */}
              <Image
                src={showDescription[index] ? '/arrow-up.svg' : item.arrow}
                alt=""
                width={12}
                height={6}
                className=""
                onClick={() => toggleDescription(index)} // Toggle description visibility on click
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Render description if showDescription is true */}
          {showDescription[index] && (
            <div style={{height: 'max-content', opacity:'1' }} className="w-9/12  text-sm text-gray-600 transition duration-700 ease-in-out delay-300">
              
                {item.description}
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Missions;
