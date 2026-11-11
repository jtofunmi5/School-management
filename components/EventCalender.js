'use client'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

const events = [
  {
    id: 1,
    title: "Staff & Faculty Briefing",
    time: "8:30 AM - 9:30 AM",
    description: "Weekly synchronization on curriculum updates and student attendance metrics.",
  },
  {
    id: 2,
    title: "Inter-House Sports Rehearsal",
    time: "11:00 AM - 1:00 PM",
    description: "Track and field practice on the main pitch for all senior secondary students.",
  },
  {
    id: 3,
    title: "PTA Executive Committee Meeting",
    time: "2:00 PM - 3:30 PM",
    description: "Review of end-of-term examination schedules and facility upgrade proposals.",
  },
  {
    id: 4,
    title: "STEM & Robotics Club Exhibition",
    time: "10:00 AM - 12:30 PM",
    description: "Live demonstrations of student coding and hardware projects in the ICT lab.",
  },
  {
    id: 5,
    title: "Mid-Term Examination Prep",
    time: "9:00 AM - 11:30 AM",
    description: "Department heads submitting final question papers to the academic office.",
  },
  {
    id: 6,
    title: "School Choir & Cultural Rehearsal",
    time: "3:00 PM - 4:30 PM",
    description: "Preparation session in the main auditorium ahead of the upcoming founders' day.",
  },
];

export default function EventCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
       
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <span className="text-gray-400 cursor-pointer text-xl font-bold">•••</span>
      </div>
    
      {/* Scrollable container added here */}
      <div className="max-h-[350px] overflow-y-auto pr-2 flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-amber-950 odd:border-b-amber-950 even:border-t-amber-400"
            key={event.id} >
          
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}