import React from 'react';
import { WorkStation } from '../../assets/types/workStation';

interface FormatDateOptions {
    year: "numeric";
    month: "short";
}

const formatDate = (dateStr?: string): string => {
    if (!dateStr) return "Present";
    const options: FormatDateOptions = { year: "numeric", month: "short" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
};

interface WorkStationProps {
    workStations?: WorkStation[];
}

const CurriculumVitae: React.FC<WorkStationProps> = ({ workStations = [] }) => {
    const stations = workStations.filter(ws => ws.isVerified);

    if (stations.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-black mb-8">Work Experience</h2>
            
            {/* Timeline Container */}
            <div className="relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300">
                {stations.map((workStation, index) => (
                    <div key={workStation.id} className="relative mb-8">
                        {/* Connecting line (not needed for last item) */}
                        {index < stations.length - 1 && (
                            <div className="absolute left-8 top-12 w-0.5 h-full bg-gray-300 z-0" />
                        )}
                        
                        {/* Timeline dot */}
                        <div className="absolute left-4 top-4 w-3 h-3 bg-black rounded-full border-2 border-white shadow-md z-10" />
                        
                        {/* Content card */}
                        <div className="pl-20 relative">
                            <div className="bg-black rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-200">
                                <div className="flex items-start space-x-4">
                                    <img 
                                        src={workStation.companyLogo} 
                                        alt={workStation.company}
                                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-3 mb-1">
                                            <h3 className="text-white font-semibold text-lg">{workStation.title}</h3>
                                            <span className="text-gray-400 text-sm bg-gray-800 px-2 py-0.5 rounded">{workStation.company}</span>
                                            {workStation.isVerified && <span className="text-blue-400 text-xs bg-blue-900/50 px-1.5 py-0.5 rounded">✔ Verified</span>}
                                        </div>
                                        <p className="text-sm text-gray-400 mb-3">{workStation.description}</p>
                                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                                            <span>{formatDate(workStation.startDate)} – {formatDate(workStation.completionDate)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurriculumVitae;
