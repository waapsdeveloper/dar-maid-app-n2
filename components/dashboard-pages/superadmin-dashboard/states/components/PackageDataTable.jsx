"use client";
import { useRouter } from "next/navigation";

const StateDataTable = () => {
  const router = useRouter();

  // Sample state data with country relationships
  const stateData = [
    {
      id: 1,
      name: "California",
      country_id: 1,
      country_name: "United States",
      created_at: "2023-08-15"
    },
    {
      id: 2,
      name: "Texas",
      country_id: 1,
      country_name: "United States",
      created_at: "2023-08-15"
    },
    {
      id: 3,
      name: "England",
      country_id: 2,
      country_name: "United Kingdom",
      created_at: "2023-08-15"
    },
    {
      id: 4,
      name: "Bavaria",
      country_id: 3,
      country_name: "Germany",
      created_at: "2023-08-15"
    },
    {
      id: 5,
      name: "New South Wales",
      country_id: 5,
      country_name: "Australia",
      created_at: "2023-08-15"
    }
  ];

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>S No</th>
          <th>State Name</th>
          <th>Country</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {stateData.map((state) => (
          <tr key={state.id}>
            <td>{state.id}</td>
            <td className="state-name">{state.name}</td>
            <td className="country">{state.country_name}</td>
            <td className="created-at">{state.created_at}</td>
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
                      router.push(`/superadmin/view-states?id=1`);
                    }}
                  >
                    <button data-text="View">
                      <span className="la la-eye"></span>
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      router.push(`/superadmin/edit-states?id=1`);
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

export default StateDataTable;