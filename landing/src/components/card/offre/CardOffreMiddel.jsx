import React from 'react';
import { HiOutlineBookmark,HiOutlinePaperAirplane } from "react-icons/hi2";

export default function  CardOffreMiddel  ()  {
  return (
    // border border-gray-300
   <div class="rounded-xl p-4 md:p-6">       
        <div class="flex items-start justify-between mb-6">
            <div class="flex items-start gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-slack text-white text-2xl"></i>
                </div>
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-1">Junior UI/UX Designer</h2>
                    <p class="text-gray-600">Slack Technologies, LLC</p>
                </div>
            </div>
            <div class="flex gap-2 flex-shrink-0">
                <button class="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 text-sm md:text-base"><HiOutlinePaperAirplane/></button>
                <button class="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 text-sm md:text-base"><HiOutlineBookmark/></button>
            </div>
        </div>
        <div class="flex flex-wrap gap-2 py-2">
            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Full Time</span>
            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Design</span>
            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Remote</span>
        </div>

                         
                <div class="mb-6">
                    <h3 class="font-bold text-gray-900 mb-3">Job Description</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        We are looking for a talented fresher UI/UX Designer who is passionate about designing custom websites with proficiency in Photoshop. The candidate will work closely with our development and design teams to create visually appealing and user-friendly custom website designs for our clients.
                    </p>
                </div>

                            <div>
                                <h3 class="font-bold text-gray-900 mb-3">Roles & Responsibilities</h3>
                                <ul class="space-y-2 text-sm text-gray-600">
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Gather and evaluate user requirements in collaboration with product managers and engineers</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Illustrate design ideas using storyboards, process flows and sitemaps</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Design graphic user interface elements, like menus, tabs and widgets</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Build page navigation buttons and search fields</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Create original graphic designs (e.g. images, sketches and tables)</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Prepare and present rough drafts to internal teams and key stakeholders</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Identify and troubleshoot UX problems (e.g. responsiveness)</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Conduct layout adjustments based on user feedback</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Adhere to style standards on fonts, colors and images</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Making layout and designs for Company's portal and applications.</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-400 mt-1">•</span>
                                        <span>Day-to-day creatives are required for Company's social media platforms including hoarding and occasional creative.</span>
                                    </li>
                                </ul>
                            </div>
            </div>
  );
};
