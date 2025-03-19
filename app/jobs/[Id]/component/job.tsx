import { Job } from "@/app/data";
import React from "react";

type Props = {
  job: Job;
};

export const SingleJob = ({ job }: Props) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-3 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-white">
      <main className="">
        {/* Job Title and Company Header */}
        <div className="border border-gray-700 flex p-5 justify-between items-center bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-300">{job.title}</h2>
          <h2 className="text-lg font-medium text-gray-300">{job.company}</h2>
        </div>

        {/* Job Details Section */}
        <div className="mt-7 border border-gray-700 flex p-10 flex-col bg-gray-800 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-gray-200">
              Location: <span className="text-gray-400">{job.location}</span>
            </h3>
            <h3 className="text-lg font-medium text-gray-200">
              Salary: <span className="text-green-400">{job.salary}</span>
            </h3>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Description:
            </h3>
            <p className="text-gray-400 leading-relaxed">{job.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
