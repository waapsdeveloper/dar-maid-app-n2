'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ViewWebsiteSetting = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settingId = searchParams.get("id");

  // Sample website settings data
  const websiteSettings = [
    {
      id: "1",
      setting_key: "site_title",
      setting_value: "Job Portal Pro",
      created_at: "2024-03-01 09:00:00",
      updated_at: "2024-03-15 14:30:00"
    },
    {
      id: "2",
      setting_key: "maintenance_mode",
      setting_value: "false",
      created_at: "2024-03-01 09:00:00",
      updated_at: "2024-03-01 09:00:00"
    },
    {
      id: "3",
      setting_key: "theme_config",
      setting_value: JSON.stringify({
        primary_color: "#2196f3",
        secondary_color: "#ff9800",
        dark_mode: true
      }, null, 2),
      created_at: "2024-03-10 10:00:00",
      updated_at: "2024-03-12 16:45:00"
    }
  ];

  const [settingData, setSettingData] = useState({
    setting_key: "",
    setting_value: "",
    created_at: "",
    updated_at: ""
  });

  useEffect(() => {
    if (settingId) {
      const setting = websiteSettings.find(s => s.id === settingId);
      if (setting) {
        setSettingData({
          setting_key: setting.setting_key,
          setting_value: setting.setting_value,
          created_at: setting.created_at,
          updated_at: setting.updated_at
        });
      }
    }
  }, [settingId]);

  // Format datetime display
  const formatDateTime = (datetime) => {
    return new Date(datetime).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Try to pretty-print JSON values
  const formatSettingValue = (value) => {
    try {
      const parsed = JSON.parse(value);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return value;
    }
  };

  return (
    <div className="default-form">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label className="fw-bold text-secondary">Setting Key</label>
            <div className="form-control-plaintext code-font">
              {settingData.setting_key}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Created At</label>
            <div className="form-control-plaintext">
              {formatDateTime(settingData.created_at)}
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold text-secondary">Updated At</label>
            <div className="form-control-plaintext">
              {formatDateTime(settingData.updated_at)}
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label className="fw-bold text-secondary">Setting Value</label>
            <pre className="setting-value-container bg-light p-3 rounded">
              {formatSettingValue(settingData.setting_value)}
            </pre>
          </div>

          {settingData.setting_key === 'maintenance_mode' && (
            <div className="form-group">
              <label className="fw-bold text-secondary">Current Status</label>
              <div className={`status-badge ${
                settingData.setting_value === 'true' ? 'active' : 'inactive'
              }`}>
                {settingData.setting_value === 'true' ? 'Active' : 'Inactive'}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="form-group text-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/superadmin/website-settings")}
        >
          Back to Settings
        </button>
      </div>

      <style jsx>{`
        .setting-value-container {
          min-height: 200px;
          white-space: pre-wrap;
          border: 1px solid #dee2e6;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }
        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: inline-block;
          font-weight: 500;
        }
        .status-badge.active {
          background-color: #d4edda;
          color: #155724;
        }
        .status-badge.inactive {
          background-color: #fff3cd;
          color: #856404;
        }
        .code-font {
          font-family: 'Courier New', monospace;
          color: #2c3e50;
        }
        .form-control-plaintext {
          padding: 0.5rem 0;
          color: #495057;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ViewWebsiteSetting;