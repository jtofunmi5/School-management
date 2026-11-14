import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalendar'
import EventCalender from '@/components/EventCalender'
import React from 'react'

const StudentPage = () => {
  return (
     <div className='p-4 flex flex-col flex-1 min-h-screen xl:flex-row gap-4 w-full'>


     <div className='w-full '>
            <BigCalendar />
      </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8 p-4 rounded-lg">
              <EventCalender />
              <Announcement />
        </div>
     </div>
  )
}

export default StudentPage;
