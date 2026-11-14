// "use client"
// import { useState, useEffect } from 'react'
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
// import moment from 'moment'
// import { calendarEvents } from '@/lib/data'
// import "react-big-calendar/lib/css/react-big-calendar.css"

// const localizer = momentLocalizer(moment)

// export default function BigCalendar() {
//   const [isMounted, setIsMounted] = useState(false)
//   const [view, setView] = useState(Views.WORK_WEEK)
  
  
//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   if (!isMounted) {
//     return <div style={{ height: 500 }} className="flex items-center justify-center text-gray-400">Loading calendar...</div>
//   }

//   // Ensure every event has valid fields so the calendar never crashes
//   const safeEvents = (calendarEvents || []).map((event, index) => {
//     if (!event) return null
//     return {
//       ...event,
//       title: event.title || `Event ${index + 1}`,
//       start: event.start ? new Date(event.start) : new Date(),
//       end: event.end ? new Date(event.end) : new Date(),
//     }
//   }).filter(Boolean)

//   return (
//     <div className="h-full  min-h-[700px] w-full bg-white p-4 rounded-xl shadow-sm items-start">
//       <Calendar
//         localizer={localizer}
//         events={safeEvents}
//         startAccessor="start"
//         endAccessor="end"
//         titleAccessor="title"
//         views={["work_week", "day"]}
//         defaultView={Views.WORK_WEEK}
//         view={view}
//         onView={(newView) => setView(newView)}
//         style={{ height: "100%" }}
//         min={new Date(2026, 7, 0, 8, 0, 0)}
//         max={new Date(2026, 11, 0, 18, 0, 0)}
//         defaultDate={new Date(2026, 7, 1)}
//       />
//     </div>
//   )
// }

"use client"
import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export default function BigCalendar() {
  const [isMounted, setIsMounted] = useState(false)
  const [view, setView] = useState(Views.WORK_WEEK)
  // Set initial date to August 12, 2026 (Month 7 = August) where your events are
  const [date, setDate] = useState(new Date(2026, 7, 10))

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div style={{ height: 500 }} className="flex items-center justify-center text-gray-400">
        Loading calendar...
      </div>
    )
  }

  // Ensure every event has valid fields so the calendar never crashes
  const safeEvents = (calendarEvents || []).map((event, index) => {
    if (!event) return null
    return {
      ...event,
      title: event.title || `Event ${index + 1}`,
      start: event.start ? new Date(event.start) : new Date(),
      end: event.end ? new Date(event.end) : new Date(),
    }
  }).filter(Boolean)

  return (
    <div className="h-full min-h-[700px] w-full bg-white p-4 rounded-xl shadow-sm items-start">
      <Calendar
        localizer={localizer}
        events={safeEvents}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        views={["work_week", "day"]}
        view={view}
        date={date}
        onView={(newView) => setView(newView)}
        onNavigate={(newDate) => setDate(newDate)}
        style={{ height: "100%" }}
        min={new Date(2026, 7, 10, 8, 0, 0)}
        max={new Date(2026, 7, 10, 18, 0, 0)}
        scrollToTime={new Date(2026, 7, 10, 8, 0, 0)}
      />
    </div>
  )
}