'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const WebsiteSettingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settingId = searchParams.get("id");

  const [formData, setFormData] = useState({
    setting_key: "",
    setting_value: ""
  });

  // Simulated website settings data
  const websiteSettingsData = [
    {
      id: "1",
      setting_key: "site_title",
      setting_value: "My Job Portal"
    },
    {
      id: "2",
      setting_key: "maintenance_mode",
      setting_value: "false"
    },
    {
      id: "3",
      setting_key: "theme_config",
      setting_value: "{ primaryColor: '#2196F3', secondaryColor: '#FFC107' }"
    }
  ];

  useEffect(() => {
    if (settingId) {
      const setting = websiteSettingsData.find(s => s.id === settingId);
      if (setting) {
        setFormData({
          setting_key: setting.setting_key,
          setting_value: setting.setting_value
        });
      }
    }
  }, [settingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (settingId) {
      console.log("Updating setting:", formData);
    } else {
      console.log("Creating setting:", formData);
    }
    router.push("/superadmin/website-settings");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Setting Key <span className="text-danger">*</span></label>
            <input
              type="text"
              name="setting_key"
              value={formData.setting_key}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="e.g., site_title, theme_config"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label>Setting Value <span className="text-danger">*</span></label>
            <textarea
              name="setting_value"
              value={formData.setting_value}
              onChange={handleChange}
              required
              className="form-control"
              rows="5"
              placeholder="Enter value (text, JSON, or URL)"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-light me-3"
          onClick={() => router.push("/superadmin/website-settings")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {settingId ? "Update Setting" : "Create Setting"}
        </button>
      </div>
    </form>
  );
};

export default WebsiteSettingForm;