import React from 'react';

import { WorkStation } from '../../assets/types/workStation';

interface WorkStationProps {
    workStations?: WorkStation[];
}

const CurriclumVitae: React.FC<WorkStationProps> = ({ workStations = [] }) => {
  const verifiedStations = workStations.filter(ws => ws.isVerified);
  const segmentHeight = 200; 
  const svgHeight = verifiedStations.length * segmentHeight;

  const generatePath = () => {
    let path = `M20 0`;
    for (let i = 1; i <= verifiedStations.length; i++) {
      const y = i * segmentHeight;
      const cpY = y - segmentHeight / 2;
      path += ` C5 ${cpY}, 35 ${cpY}, 20 ${y}`;
    }
    return path;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Work Stations</h2>

      <div className="relative flex flex-col items-center">
        <svg
          width="40"
          height={svgHeight}
          viewBox={`0 0 40 ${svgHeight}`}
          preserveAspectRatio="none"
          className="absolute left-1/2 transform -translate-x-1/2 h-full z-0"
        >
          <path
            d={generatePath()}
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        <div className="relative flex flex-col gap-20 w-full items-center z-10">
          {verifiedStations.map((workStation) => (
            <div
              key={workStation.id}
              className="p-4 shadow transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center space-x-2 rounded-full bg-blue-400 text-white"
            >
              <div className="flex items-center space-x-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {workStation.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {workStation.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriclumVitae;


