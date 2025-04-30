'use client';

import PackageDataTable from "./components/PackageDataTable";
import { useRouter } from "next/navigation";
import DsPageOuter from "@/templates/layouts/ds-page-outer";
import { ProfileTypes } from "@/data/globalKeys";
const index = () => {
  const router = useRouter();
  return (

    <DsPageOuter headerType="superadmin" title="Cities" subtitle="List of Cities" >

      {/* Collapsible sidebar button */}
      <div className="row">
        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div
                className="widget-title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <h4 style={{ margin: 0 }}>Cities</h4>
                <button
                  className="theme-btn btn-style-one"
                  onClick={() => {
                    router.push("/superadmin/add-cities");
                  }}
                  style={{
                    minWidth: "150px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <span className="la la-plus"></span>
                  Add New
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

    </DsPageOuter>


    // End page-wrapper
  );
};

export default index;
