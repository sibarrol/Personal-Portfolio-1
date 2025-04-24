import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        {/* Experience 1 */}
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Budgeting Website (BUdget)</h3>
            <p className='font-light text-lg text-gray-600'>Developer of Interactive Budgeting Tool</p>
            <p className='text-sm text-gray-600'>
              Built a responsive web application using React, React Router, and useRef, allowing students to track expenses. 
              Developed AI-driven budget optimization, providing personalized spending recommendations. 
              Integrated Toastify notifications and real-time updates for a seamless user experience.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Amazon</h3>
            <p className='font-light text-lg text-gray-600'>Software Development Intern</p>
            <p className='text-sm text-gray-600'>
              Worked on internal logistics optimization tool used by warehouse teams. 
              Implemented frontend features in React and integrated backend APIs using Node.js. 
              Collaborated in an agile environment and presented weekly updates to senior engineers.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Study Abroad Tutor</h3>
            <p className='font-light text-lg text-gray-600'>Founder</p>
            <p className='text-sm text-gray-600'>
              Launched a global tutoring platform generating $3,000 monthly revenue. 
              Managed a team of 10+ tutors and 30+ students. 
              Built the web platform using React and optimized SEO to grow traffic to 3,000+ users per month.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience