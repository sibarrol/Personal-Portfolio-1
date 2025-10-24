import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        
        {/* Project 1 */}
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>College Hockey Award Show</h1>
          <h3 className='text-xl text-gray-700'>DS 210 Project</h3>
          <p className='text-sm text-gray-600'>
            Built a program that analyzed college hockey statistics and gave awards based on the NHL end-of-season trophies.
          </p>
        </div>

        {/* Project 2 */}
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Mini Hacks Winner</h1>
          <h3 className='text-xl text-gray-700'>BU Spark! Hackathons</h3>
          <p className='text-sm text-gray-600'>
            Won a hackathon by creating an app idea for voter information awareness.
          </p>
        </div>

        {/* Project 3 */}
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Portfolio Website</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-sm text-gray-600'>
            Designed and built a personal portfolio using React, Tailwind CSS, and Vite to showcase projects and experience. Mobile responsive with clean UI/UX.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Projects