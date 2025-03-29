import { useRouter } from "next/navigation";

const PackageDataTable = () => {
  const router = useRouter();

  const eventData = [
    { id: "1", key: "profile_update", value: "Updated contact information", event: "Aq4LUIuDpU" },
    { id: "2", key: "server_health", value: "CPU usage 85%", event: "Aq4LUIuDpU" },
  ];

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {eventData.map((event) => (
          <tr key={event.id}>
            <td>{event.key}</td>
            <td>{event.value}</td>
            <td>{event.event}</td>
            <td>
            <ul
                    className="option-list d-flex list-unstyled m-0 p-0 gap-2"
                    style={{ justifyContent: "flex-start", width: "100%" }}
                  >
                    {/* <li>
                    <button data-text="Add">
                      <span className="la la-plus-circle"></span>
                    </button>
                  </li> */}
                    <li>
                      <button data-text="View Details">
                        <span className="la la-eye"></span>
                      </button>
                    </li>
                    <li>
                      <button data-text="Edit" onClick={() => router.push(`/superadmin/add-roles?id=${event.id}`)}>
                        <span className="la la-pencil"></span>
                      </button>
                    </li>
                    <li>
                      <button data-text="Delete">
                        <span className="la la-trash"></span>
                      </button>
                    </li>
                  </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
