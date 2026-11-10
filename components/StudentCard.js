import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";


const roleColors = {
  student: 'bg-blue-500',
  parent: 'bg-emerald-500',
  teacher: 'bg-purple-500',
  admin: 'bg-amber-500',
};

const rolecardbg = {
 student: 'bg-blue-50/40 border-blue-200',
  parent: 'bg-emerald-50/40 border-emerald-200',
  teacher: 'bg-purple-50/40 border-purple-200',
  admin: 'bg-blue-50/40 border-blue-200',
};

 function StudentCard({ 

  role = 'student', 
  title = 'Lorem ipsum task', 
  tagText = 'Draggable' 
}) {
  const badgeColor = roleColors[role] 
  const  cardcolour = rolecardbg[role]

  return (
    <Card className={`w-full  max-w-[350px] ${cardcolour}  border shadow-sm hover:shadow-md transition-all cursor-move`}>
      {/* Header with Tag and Options */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <span className={`${badgeColor} text-white text-[12px] px-3 py-1 rounded-full font-medium capitalize`}>
          {tagText}
        </span>
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none bg-transparent border-0 cursor-pointer">
          <svg viewBox="0 0 41.915 41.916" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
            <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z" />
            <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z" />
            <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z" />
          </svg>
        </button>
      </CardHeader>

      {/* Main Body Content */}
      <CardContent className="py-2">
        <p className="text-[15px] text-gray-800">{title}</p>
      </CardContent>

      {/* Footer Stats */}
      <CardFooter className="pt-2 text-xs text-gray-400 flex items-center justify-between">
        <span>{role}</span>
      </CardFooter>
    </Card>
  );
}
export default StudentCard;