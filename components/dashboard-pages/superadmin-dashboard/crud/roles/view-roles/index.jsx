"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DashboardSuperAdminSidebar from "@/components/header/DashboardSuperAdminSidebar";
import BreadCrumb from "@/components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
// Mock data - replace with actual API call
const mockRoles = [
  { id: "1", name: "Admin", slug: "admin" },
  { id: "2", name: "Editor", slug: "editor" },
];

const index = () => {
  const router = useRouter();
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Extract role ID from URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const roleId = queryParams.get('id');

    // Find the role in mock data - replace with API call
    const foundRole = mockRoles.find(r => r.id === roleId);
    if (foundRole) {
      setRole(foundRole);
    } else {
      // Handle role not found
      console.error('Role not found');
      router.push('/superadmin/roles');
    }
  }, [router]);

  if (!role) return null;

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardSuperAdminSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Role Details" />
          <MenuToggler />

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Role Information</h4>
                  </div>

                  <div className="widget-content">
                    <div className="profile-form-style">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                            <strong>ID:</strong>
                            <span>{role.id}</span>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                            <strong>Name:</strong>
                            <span>{role.name}</span>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                            <strong>Slug:</strong>
                            <span>{role.slug}</span>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-12">
                          <button
                            className="theme-btn btn-style-one"
                            onClick={() => router.push('/superadmin/roles')}
                          >
                            Back to Roles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default index;