import React from "react";
import { Job } from "../data";

type Props = {
  job: Job;
};

export const JobCard = ({ job }: Props) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow-sm p-6 flex justify-between items-center text-white hover:shadow-md hover:border-blue-500 transition-all duration-300">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-blue-300">{job.title}</h2>
        <p className="text-sm text-gray-400">
          {job.description.slice(0, 50)}...
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-200">{job.company}</h2>
      </div>
    </div>
  );
};
