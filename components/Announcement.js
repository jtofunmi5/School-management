import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const announcementsData = [
  {
    id: 1,
    title: "School Holiday Notice",
    date: "2026-11-15",
    description: "Mid-term break begins next week. School will resume on Monday.",
    color: "bg-amber-50 border-l-4 border-amber-500"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "2026-11-20",
    description: "Annual general meeting will hold in the main hall by 10 AM.",
    color: "bg-sky-50 border-l-4 border-sky-500"
  },
  {
    id: 3,
    title: "Science Fair Exhibition",
    date: "2026-11-25",
    description: "Students are to submit their project prototypes before Friday.",
    color: "bg-purple-50 border-l-4 border-purple-500"
  }
];

const Announcement = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold px-1">Announcements</h2>
      {announcementsData.map((item) => (
        <Card key={item.id} className={`${item.color} shadow-sm`}>
          <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">
              {item.date}
            </span>
          </CardHeader>
          <CardContent className="p-4 pt-0 text-sm text-gray-600">
            <p>{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Announcement;