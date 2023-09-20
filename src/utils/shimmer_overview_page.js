import React from 'react'

const shimmer_overview_page = () => {
  return (
    <div className="animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 p-4 md:p-8 lg:p-12 xl:p-16 text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative">
        <div className="rounded-lg shadow-lg max-h-60 md:max-h-full bg-gray-300"></div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4 bg-gray-300 h-8 w-3/4"></div>
        <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <div className="flex items-center bg-gray-300 h-5 w-1/4"></div>
          <div className="flex items-center bg-gray-300 h-5 w-1/4"></div>
          <div className="flex items-center bg-gray-300 h-5 w-1/4"></div>
          <div className="flex items-center bg-gray-300 h-5 w-1/4"></div>
        </div>
        <div className="text-2xl font-bold mb-4 bg-gray-300 h-8 w-1/2"></div>
        <div className="italic mb-4 bg-gray-300 h-4 w-3/4"></div>
        <div className="bg-gray-300 h-20 w-full mb-4"></div>
        <div className="mb-4">
          <div className="font-bold bg-gray-300 h-6 w-1/4"></div>
          <div className="bg-gray-300 h-4 w-3/4"></div>
        </div>
        <div>
          <div className="font-bold bg-gray-300 h-6 w-1/4"></div>
          <div className="bg-gray-300 h-4 w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default shimmer_overview_page