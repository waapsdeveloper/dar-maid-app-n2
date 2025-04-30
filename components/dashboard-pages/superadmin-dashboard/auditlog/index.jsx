'use client';
import { useRouter } from "next/navigation";
import PackageDataTable from "./components/PackageDataTable";
import Pagination from "./components/pagination";
import DsPageOuter from "@/templates/layouts/ds-page-outer";

const Index = () => {
  const router = useRouter();

  return (
    <DsPageOuter
      headerType="superadmin"
      title="Audit Log!"
      subtitle="Manage and review audit logs"      
    >
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
                <h4 style={{ margin: 0 }}>Website</h4>
                <button
                  className="theme-btn btn-style-one"
                  onClick={() => {
                    router.push("/superadmin/add-auditlog");
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

      <Pagination />
    </DsPageOuter>
  );
};

export default Index;
