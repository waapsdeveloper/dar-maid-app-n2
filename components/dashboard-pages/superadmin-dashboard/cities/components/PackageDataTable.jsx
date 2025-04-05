"use client";
import { useRouter } from "next/navigation";
import DeleteConfirmationPopup from "@/components/dashboard-pages/DeleteConfirmationPopup";
import React from "react";
const CityDataTable = () => {
  const router = useRouter();

  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform deletion logic here
    setIsDeletePopupOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false);
  };

  // Sample city data with state and country relationships
  const cityData = [
    {
      id: 1,
      name: "Los Angeles",
      state_id: 1,
      state_name: "California",
      country_name: "United States",
      created_at: "2023-08-15",
    },
    {
      id: 2,
      name: "Houston",
      state_id: 2,
      state_name: "Texas",
      country_name: "United States",
      created_at: "2023-08-15",
    },
    {
      id: 3,
      name: "London",
      state_id: 3,
      state_name: "England",
      country_name: "United Kingdom",
      created_at: "2023-08-15",
    },
    {
      id: 4,
      name: "Munich",
      state_id: 4,
      state_name: "Bavaria",
      country_name: "Germany",
      created_at: "2023-08-15",
    },
    {
      id: 5,
      name: "Sydney",
      state_id: 5,
      state_name: "New South Wales",
      country_name: "Australia",
      created_at: "2023-08-15",
    },
  ];

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>S No</th>
          <th>City Name</th>
          <th>State</th>
          <th>Country</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {cityData.map((city) => (
          <tr key={city.id}>
            <td>{city.id}</td>
            <td className="city-name">{city.name}</td>
            <td className="state">{city.state_name}</td>
            <td className="country">{city.country_name}</td>
            <td className="created-at">{city.created_at}</td>
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
                      router.push(`/superadmin/view-cities?id=1`);
                    }}
                  >
                    <button data-text="View">
                      <span className="la la-eye"></span>
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      router.push(`/superadmin/edit-cities?id=1`
                        
                      );
                    }}
                  >
                    <button data-text="Edit">
                      <span className="la la-pencil"></span>
                    </button>
                  </li>
                  <li onClick={handleDeleteClick}>
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

export default CityDataTable;
