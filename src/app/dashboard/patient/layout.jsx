const PatientLayout = ({ children }) => {
    return (
      <div className="flex h-full">
        {/* Sidebar specific to Patient */}
        <div className="w-1/4 bg-purple-200 p-4 min-h-screen">
          <ul className="space-y-4">
            <li><a href="/dashboard/patient/profile">Profile</a></li>
            <li><a href="/dashboard/patient/appointments">Appointments</a></li>
            {/* Other patient-specific links */}
          </ul>
        </div>
  
        {/* Patient content */}
        <div className="w-3/4 p-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default PatientLayout;
  