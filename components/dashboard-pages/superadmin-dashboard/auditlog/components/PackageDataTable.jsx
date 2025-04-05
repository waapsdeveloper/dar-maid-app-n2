'use client'
import { useRouter } from "next/navigation";
const PackageDataTable = () => {
   // Sample event data
  const router = useRouter();

  const eventData = [
    {
      id: 1,
      key: "profile_update",
      value: "Updated contact information",
      event: "Aq4LUIuDpU",
    },
    {
      id: 2,
      key: "server_health",
      value: "CPU usage 85%",
      event: "Aq4LUIuDpU",
    },
    {
      id: 3,
      key: "/v1/users/create",
      value: "New user created: ID-2345",
      event: "Aq4LUIuDpU",
    },
    {
      id: 4,
      key: "login_attempt",
      value: "Failed login from 192.168.1.1",
      event: "Aq4LUIuDpU",
    },
    {
      id: 5,
      key: "job_listing",
      value: "Modified listing ID-JB-789",
      event: "Aq4LUIuDpU",
    }
  ];


  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
         
          <th>Key</th>
          <th>Value</th>
          <th>event</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {eventData.map((event) => (
          <tr key={event.id}>
          
            <td className="key"><code>{event.key}</code></td>
            <td className="value">{event.value}</td>
            <td className="event">{event.event}</td>
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