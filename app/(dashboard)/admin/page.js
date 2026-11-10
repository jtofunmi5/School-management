import RolePieChart from '@/components/RolePieChart';
import StudentCard from '@/components/StudentCard';


export default function Page() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 pr-3 justify-items-center gap-6">
      <StudentCard role="student" title="Review student admissions" tagText='1234' />
      <StudentCard role="parent" title="PTA meeting confirmation" tagText='2453' />
      <StudentCard role="teacher" title="Upload term exam results" tagText='63767' />
      <StudentCard role="admin" title="Control Panel" tagText='2453' />
     </div>

     <div>
       <div className="p-6 space-y-6">
      {/* Your Cards Section */}
      
      {/* Chart Section */}
      <div className="">
        <RolePieChart />
      </div>
    </div>
     </div>
   <div className='w-full lg:w-1/3'>R</div>
 </div>
  );
}