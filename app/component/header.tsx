"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CreateJobPopOver } from "./createCardPopOver";

export const Header = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 bg-gray-900 text-white">
      <div className="mx-auto container px-4">
        <div className="flex justify-between p-3 items-center">
          <Link
            href="/"
            className="text-lg font-semibold text-blue-300 hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <div>
            <button
              className="border border-gray-600 bg-gray-800 text-gray-200 p-3 rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 cursor-pointer"
              onClick={() => setIsPopoverOpen(true)}
            >
              Create Job
            </button>
          </div>
        </div>
      </div>
      {isPopoverOpen && (
        <CreateJobPopOver onClose={() => setIsPopoverOpen(false)} />
      )}
    </div>
  );
};
