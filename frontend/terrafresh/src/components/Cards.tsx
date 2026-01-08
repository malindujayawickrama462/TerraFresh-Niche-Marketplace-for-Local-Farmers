import React from 'react'

function Cards({ title, description }: { title?: string; description?: string }) {
  return (
       <div className="bg-white text-black p-6 m-4 rounded-lg shadow-md max-w-xs">
      <h2 className="text-xl font-semibold">{title || "Feature Title"}</h2>
      <p className="mt-2">{description || "Feature description goes here."}</p>
    </div>
  )
}

export default Cards