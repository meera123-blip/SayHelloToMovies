import React from 'react'

const shimmer_search_list = () => {
  return (
    <div className="bg-white rounded-lg shadow-md flex overflow-hidden border border-gray-200 animate-pulse">
    <div className="w-1/4 bg-gray-300 h-auto"></div>
    <div className="w-3/4 p-4">
      <div className="bg-gray-300 h-5 w-1/2 mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/4"></div>
    </div>
  </div>
  )
}

export default shimmer_search_list