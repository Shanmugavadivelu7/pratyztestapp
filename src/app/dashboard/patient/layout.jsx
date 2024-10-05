// const PatientLayout = ({ children }) => {
//     return (
//       <div className="flex h-full">
//         {/* Sidebar specific to Patient */}
//         <div className="w-1/4 bg-purple-200 p-4 min-h-screen">
//           <ul className="space-y-4">
//             <li><a href="/dashboard/patient/profile">Profile</a></li>
//             <li><a href="/dashboard/patient/appointments">Appointments</a></li>
//             {/* Other patient-specific links */}
//           </ul>
//         </div>
  
//         {/* Patient content */}
//         <div className="w-3/4 p-4">
//           {children}
//         </div>
//       </div>
//     );
//   };
  
//   export default PatientLayout;
  import Link from "next/link";
const PatientLayout = ({ children }) => {
  return (
    <div className="flex h-full">
      {/* Patient-specific Sidebar */}
      <div className="flex-none w-1/6 -ml-6 -mt-6 bg-purple-200 p-4 min-h-screen">
        <ul className="space-y-4">
          <li><Link href="/dashboard/patient/profile">Profile</Link></li>
          <li><Link href="/dashboard/patient/appointments">Appointments</Link></li>
          {/* Add more patient-specific links as needed */}
        </ul>
      </div>

      {/* Patient content area */}
      <div className="flex-grow p-0">
        {children}
      </div>
    </div>
  );
};

export default PatientLayout;
