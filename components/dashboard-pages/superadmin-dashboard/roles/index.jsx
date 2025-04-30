'use client';

import { useRouter } from "next/navigation";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import PackageDataTable from "./components/PackageDataTable";
import Pagination from "./components/pagination";

const index = () => {
  const router = useRouter();

  return (
    <DsPageOuter
      headerType="superadmin"
      title="All Roles!"
      subtitle="Manage and review roles"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div
                className="widget-title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                }}
              >
                <h4 style={{ margin: 0 }}>Roles</h4>
                <button
                  className="theme-btn btn-style-one"
                  style={{
                    padding: "10px 20px",
                  }}
                  onClick={() => router.push("/superadmin/add-roles")}
                >
                  Add Role
                </button>
              </div>
              {/* End widget-title */}

              <div className="widget-content">
                <div className="table-outer">
                  <PackageDataTable />
                </div>
              </div>
              {/* End widget-content */}
            </div>
          </div>
          {/* <!-- Ls widget --> */}
        </div>
      </div>
      {/* End .row */}

      <Pagination />
    </DsPageOuter>
  );
};

export default index;
