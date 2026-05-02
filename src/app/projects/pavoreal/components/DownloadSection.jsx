"use client";

import { useState, useEffect } from "react";
import { FaFilePdf, FaFileAlt } from "react-icons/fa";
import "./download.css";

const files = [
  {
    title: "Palace Heights Brochure",
    file: "/projects/palace-heights/PH-brochure-new.pdf",
    icon: <FaFilePdf />,
  },
  {
    title: "Palace Heights Presentation",
    file: "/projects/palace-heights/ph-ppt-july-2017.pdf",
    icon: <FaFileAlt />,
  },
  {
    title: "Palace Heights Bhagidari Poster",
    file: "/projects/palace-heights/bhagidari_poster_PH.pdf",
    icon: <FaFilePdf />,
  },
  {
    title: "Palace Heights Registration Certificate",
    file: "/projects/palace-heights/Registration-Certificare-ph.pdf",
    icon: <FaFilePdf />,
  },
];

export default function DownloadPanel() {
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isFilled =
    typeof window !== "undefined" && localStorage.getItem("userFilled");

  // ✅ Auto-fill if already saved
  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // ✅ FORCE DOWNLOAD (may fallback if CORS blocks)
  const triggerDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = url.split("/").pop();

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
      window.open(url, "_blank"); // fallback
    }
  };

  // CLICK DOWNLOAD
  const handleDownload = (file) => {
    if (isFilled) {
      triggerDownload(file);
    } else {
      setSelectedFile(file);
      setShowForm(true);
    }
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("userFilled", "true");
    localStorage.setItem("userData", JSON.stringify(formData));

    setShowForm(false);

    await triggerDownload(selectedFile);
  };

  return (
    <>
      {/* LEFT HOVER PANEL */}
      <div className="download-wrapper">
        <div className="download-hover-area">
          {/* TAB */}
          <div className="download-btn">
            <span className="btn-text">Download File</span>
          </div>

          {/* EXPAND PANEL */}
          <div className="download-dropdown">
            {files.map((item, i) => (
              <div
                key={i}
                className="download-item"
                onClick={() => handleDownload(item.file)}
              >
                <span className="icon">{item.icon}</span>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="download-modal">
          <div className="form-box">
            <h3>Fill Details</h3>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit & Download</button>
            </form>

            <span className="close" onClick={() => setShowForm(false)}>
              ✕
            </span>
          </div>
        </div>
      )}
    </>
  );
}
