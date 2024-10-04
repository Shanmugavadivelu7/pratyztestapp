import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-purple-800 text-white p-4">
        <div className="mb-6">
          {/* Logo */}
          <h1 className="text-3xl font-bold">PRACTYZ</h1>
        </div>
        <ul className="space-y-4">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/dashboard/calendar">Calendar</Link></li>
          <li><Link href="/dashboard/patient">Patient</Link></li>
          <li><Link href="/dashboard/invoice">Invoice</Link></li>
          <li><Link href="/dashboard/billings">Billings</Link></li>
          <li><Link href="/dashboard/records">Records</Link></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="w-4/5">
        <header className="bg-gray-100 p-4 flex justify-end">
          {/* Navbar with some icons */}
          <div className="space-x-4">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
