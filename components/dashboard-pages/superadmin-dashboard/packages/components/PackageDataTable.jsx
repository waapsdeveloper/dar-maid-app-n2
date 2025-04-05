"use client";
import { useRouter } from "next/navigation";
const PackageDataTable = () => {
  const router = useRouter();
  // Sample data
  const queryData = [
    {
      id: 1,
      queryId: "#593677663",
      title: "Payment Issue",
      message: "Unable to process subscription payment for premium package",
    },
    {
      id: 2,
      queryId: "#593677901",
      title: "Account Verification",
      message: "Documents pending for employer account verification",
    },
    {
      id: 3,
      queryId: "#593678245",
      title: "Job Posting Error",
      message: "Getting error when trying to post new job listing",
    },
    {
      id: 4,
      queryId: "#593678567",
      title: "Profile Update",
      message: "Unable to update company profile information",
    },
    {
      id: 5,
      queryId: "#593678892",
      title: "CV Access",
      message: "Premium CV access not activated despite payment",
    },
  ];

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>S No</th>
          <th>Query ID</th>
          <th>Title</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {queryData.map((query) => (
          <tr key={query.id}>
            <td>{query.id}</td>
            <td className="query-id">{query.queryId}</td>
            <td className="title">{query.title}</td>
            <td className="message">{query.message}</td>
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
