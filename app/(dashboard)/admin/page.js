import StudentCard from "@/components/StudentCard";
import DataPiechart from "@/components/DataPiechart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalender from "@/components/EventCalender"
import Announcement from "@/components/Announcement";

export default function Page() {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
     
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StudentCard role="student" title="Review student admissions" tagText="1234" />
          <StudentCard role="parent" title="PTA meeting confirmation" tagText="2453" />
          <StudentCard role="teacher" title="Upload term exam results" tagText="63767" />
          <StudentCard role="admin" title="Control Panel" tagText="2453" />
        </div>

        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <DataPiechart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

       
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      
      <div className="w-full lg:w-1/3 flex flex-col gap-8 p-4 rounded-lg">
      
          <EventCalender />
          <Announcement />
        
      </div>
    </div>
  );
}