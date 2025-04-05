'use client';
import { useRouter } from "next/navigation";
const PackageDataTable = () => {
  // Sample audit log data
  const router = useRouter();
  const auditData = [
    {
      id: 1,
      timestamp: "2023-07-15 14:30:45",
      user: "admin@example.com",
      action: "CREATE",
      target: "User Account",
      targetId: "USR-2345",
      ipAddress: "192.168.1.100",
      device: "Chrome/Windows 10",
      location: "Manama, Bahrain",
      changes: "+3 fields added",
      status: "Success",
    },
    {
      id: 2,
      timestamp: "2023-07-15 14:35:22",
      user: "manager@example.com",
      action: "UPDATE",
      target: "Job Listing",
      targetId: "JOB-7890",
      ipAddress: "203.45.67.89",
      device: "Safari/iOS 15",
      location: "Riffa, Bahrain",
      changes: "Salary field modified",
      status: "Warning",
    },
    {
      id: 3,
      timestamp: "2023-07-15 14:40:11",
      user: "system",
      action: "DELETE",
      target: "Candidate Profile",
      targetId: "CAN-3456",
      ipAddress: "127.0.0.1",
      device: "System Process",
      location: "Localhost",
      changes: "-1 record removed",
      status: "Critical",
    },
    {
      id: 4,
      timestamp: "2023-07-15 14:45:09",
      user: "user@example.com",
      action: "LOGIN",
      target: "Authentication",
      targetId: "N/A",
      ipAddress: "45.67.89.123",
      device: "Firefox/Android",
      location: "Muharraq, Bahrain",
      changes: "2FA enabled",
      status: "Info",
    },
  ];

  // Status styling
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "success":
        return "badge bg-success";
      case "warning":
        return "badge bg-warning text-dark";
      case "critical":
        return "badge bg-danger";
      case "info":
        return "badge bg-info";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>User</th>
          <th>Action</th>
          <th>Target</th>
          <th>IP Address</th>
          <th>Device</th>
          <th>Location</th>
          <th>Changes</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {auditData.map((log) => (
          <tr key={log.id}>
            <td className="timestamp">{log.timestamp}</td>
            <td className="user">{log.user}</td>
            <td className="action">
              <span className="badge bg-primary">
                <i className="la la-edit mr-1"></i>
                {log.action}
              </span>
            </td>
            <td className="target">
              {log.target} <br />
              <small className="text-muted">ID: {log.targetId}</small>
            </td>
            <td className="ip-address">
              <code>{log.ipAddress}</code>
            </td>
            <td className="device">{log.device}</td>
            <td className="location">{log.location}</td>
            <td className="changes">
              {log.changes.includes("+") ? (
                <span className="text-success">
                  <i className="la la-plus"></i> {log.changes}
                </span>
              ) : log.changes.includes("-") ? (
                <span className="text-danger">
                  <i className="la la-minus"></i> {log.changes}
                </span>
              ) : (
                log.changes
              )}
            </td>
            <td className="status">
              <span className={getStatusClass(log.status)}>{log.status}</span>
            </td>
            <td className="action" style={{ textAlign: "left", width: "1%" }}>
              <div
                className="option-box d-flex gap-2 justify-content-center"
                style={{ width: "100%" }}
              >
                <ul
                  className="option-list d-flex list-unstyled m-0 p-0 gap-2"
                  style={{ justifyContent: "flex-start", width: "100%" }}
                >
                  <li
                    onClick={() => {
                      router.push(`/superadmin/view-query?id=1`);
                    }}
                  >
                    <button data-text="View">
                      <span className="la la-eye"></span>
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      router.push("/superadmin/edit-query?id=1");
                    }}
                  >
                    <button data-text="Edit">
                      <span className="la la-pencil"></span>
                    </button>
                  </li>
                  <li>
                    <button data-text="Delete">
                      <span className="la la-trash"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
