// import Link from 'next/link';

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-purple-900 text-white p-4">
//         <div className="mb-6">
//           {/* Logo */}
//           <h1 className="text-3xl font-bold">PRACTYZ</h1>
//         </div>
//         <ul className="space-y-4">
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/dashboard/calendar">Calendar</Link></li>
//           <li><Link href="/dashboard/patient">Patient</Link></li>
//           <li><Link href="/dashboard/invoice">Invoice</Link></li>
//           <li><Link href="/dashboard/billings">Billings</Link></li>
//           <li><Link href="/dashboard/records">Records</Link></li>
//         </ul>
//       </div>

//       {/* Main content area */}
//       <div className="w-4/5">
//         <header className="bg-gray-100 p-4 flex justify-end">
//           {/* Navbar with some icons */}
//           <div className="space-x-4">
//             <span>🔔</span>
//             <span>👤</span>
//           </div>
//         </header>
//         <main className="p-4">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };
// export default DashboardLayout;


// import Link from 'next/link';

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       {/* Main Sidebar */}
//       <div className="flex-none w-1/10 bg-purple-800 text-white p-4">
//         <div className="mb-6">
//           {/* Logo */}
//           <h1 className="text-3xl font-bold">PRACTYZ</h1>
//         </div>
//         <ul className="space-y-4">
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/dashboard/calendar">Calendar</Link></li>
//           <li><Link href="/dashboard/patient">Patient</Link></li>
//           <li><Link href="/dashboard/invoice">Invoice</Link></li>
//           <li><Link href="/dashboard/billings">Billings</Link></li>
//           <li><Link href="/dashboard/records">Records</Link></li>
//         </ul>
//       </div>

//       {/* Main content area */}
//       <div className="flex-grow bg-gray-100">
//         <header className="bg-gray-200 p-4 flex justify-end">
//           {/* Navbar with some icons */}
//           <div className="space-x-4">
//             <span>🔔</span>
//             <span>👤</span>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="p-4 flex-1">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { RiApps2AddLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <div className="flex-none w-1/10 bg-purple-900 text-white p-4">
        <div className="mb-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            {/* Logo Image */}
            <img src="/path-to-your-logo.png" alt="PRACTYZ Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-center text-2xl font-bold">PRACTYZ</h1>
        </div>
        <ul className="space-y-8 text-lg">
          <li className="flex items-center space-x-2">
            <span className="material-icons">dashboard</span>
            <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">calendar_today</span>
            <Link href="/dashboard/calendar" className="hover:text-gray-300">Calendar</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">people</span>
            <Link href="/dashboard/patient" className="hover:text-gray-300">Patient</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">receipt</span>
            <Link href="/dashboard/invoice" className="hover:text-gray-300">Invoice</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">credit_card</span>
            <Link href="/dashboard/billings" className="hover:text-gray-300">Billings</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">assignment</span>
            <Link href="/dashboard/records" className="hover:text-gray-300">Records</Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-grow bg-gray-100">
        <header className="bg-white p-4 flex justify-end items-center space-x-6 shadow">
          {/* Navbar icons */}
          <span className="material-icons text-gray-600 cursor-pointer"><MdOutlineCalendarMonth/></span>
          <span className="material-icons text-gray-600 cursor-pointer"><RiApps2AddLine/></span>
          <span className="material-icons text-gray-600 cursor-pointer"><CiMail/></span>
          <span className="material-icons text-gray-600 cursor-pointer"><IoIosNotificationsOutline/></span>
          <img
            src="/path-to-your-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </header>

        {/* Content Area */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
