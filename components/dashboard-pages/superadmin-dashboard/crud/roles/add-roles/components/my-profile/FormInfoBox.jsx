'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FormInfoBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleId = searchParams.get("id"); // Get the role ID from the URL query params

  const [formData, setFormData] = useState({
    name: "New Role",
    slug: "New Slug",
  });

  // Simulated database (Replace this with an API call)
  const rolesData = [
    { id: "1", name: "UI Designer", slug: "Aq4LUIuDpU" },
    { id: "2", name: "Backend Engineer", slug: "Bk7DGHJkL" },
  ];

  useEffect(() => {
    if (roleId) {
      // If editing, load role data
      const role = rolesData.find((r) => r.id === roleId);
      if (role) {
        setFormData(role);
      }
    }
  }, [roleId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleId) {
      console.log("Updating role:", formData);
      // Call your API to update role
    } else {
      console.log("Adding new role:", formData);
      // Call your API to add role
    }
    router.push("/superadmin/roles"); // Redirect after saving
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Slug</label>
          <input type="text" name="slug" value={formData.slug} onChange={handleChange} required />
        </div>
      </div>
      
      <div className="form-group col-lg-6 col-md-12">
        <button type="submit" className="theme-btn btn-style-one">
          {roleId ? "Update Role" : "Add Role"}
        </button>
      </div>
    </form>
  );
};

export default FormInfoBox;
