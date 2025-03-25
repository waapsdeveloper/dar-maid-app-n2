const PackageDataTable = () => {
  // Sample event data
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
            <td className="action">
              <div className="option-box d-flex gap-2 justify-content-center">
                <ul className="option-list d-flex list-unstyled m-0 p-0 gap-2">
                <li>
                    <button data-text="Add">
                      <span className="la la-plus-circle"></span>
                    </button>
                  </li>
                  <li>
                    <button data-text="View Details">
                      <span className="la la-eye"></span>
                    </button>
                  </li>
                  <li>
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