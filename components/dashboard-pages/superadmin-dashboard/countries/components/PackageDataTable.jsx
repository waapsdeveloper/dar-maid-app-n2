"use client";
import { useRouter } from "next/navigation";

const PackageDataTable = () => {
  const router = useRouter();

  // Country data based on the database schema
  const countryData = [
    {
      id: 1,
      name: "United States",
      dial_code: "+1",
      currency: "USD",
      iso_code: "USA"
    },
    {
      id: 2,
      name: "United Kingdom",
      dial_code: "+44",
      currency: "GBP",
      iso_code: "GBR"
    },
    {
      id: 3,
      name: "Germany",
      dial_code: "+49",
      currency: "EUR",
      iso_code: "DEU"
    },
    {
      id: 4,
      name: "Japan",
      dial_code: "+81",
      currency: "JPY",
      iso_code: "JPN"
    },
    {
      id: 5,
      name: "Australia",
      dial_code: "+61",
      currency: "AUD",
      iso_code: "AUS"
    }
  ];

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>S No</th>
          <th>Country Name</th>
          <th>Dial Code</th>
          <th>Currency</th>
          <th>ISO Code</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {countryData.map((country) => (
          <tr key={country.id}>
            <td>{country.id}</td>
            <td className="country-name">{country.name}</td>
            <td className="dial-code">{country.dial_code}</td>
            <td className="currency">{country.currency}</td>
            <td className="iso-code">{country.iso_code}</td>
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
                      router.push(`/superadmin/view-countries?id=1`);
                    }}
                  >
                    <button data-text="View">
                      <span className="la la-eye"></span>
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      router.push(`/superadmin/edit-countries?id=1`);
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