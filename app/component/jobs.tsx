"use client";
import React, { useState } from "react";
import { Job } from "../data";
import Link from "next/link";
import { JobCard } from "./jobCard";

type Props = {
  jobs: Job[];
};

export const Jobs = ({ jobs }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleJobs, setVisibleJobs] = useState(4);

  const loadMore = () => setVisibleJobs((prev) => prev + 2);
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="grid grid-rows-[20px_1fr_100px] min-h-screen p-3 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]  text-white">
      <main className="flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-blue-300">Job Listings</h1>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.splice(0, visibleJobs).map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="block">
              <JobCard job={job} />
            </Link>
          ))}
        </div>
        {visibleJobs < jobs.length && (
          <button
            onClick={loadMore}
            className="mt-7 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
};
