import { useSelector } from "react-redux";
import { useState } from "react";
import { FaUserEdit, FaSave } from "react-icons/fa";

export default function Profile() {
  const auth = useSelector((state) => state.auth || {});
  const role = auth.role || "user";
  const username = auth.user || "Guest User";
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: username,
    email: `${username}@businessanalysis.io`,
    phone: "9876543210",
    department: role === "admin" ? "Management" : "Employee",
    designation: role === "admin" ? "System Admin" : "Team Member",
    location: "Mumbai, India"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="page-title">Profile</h3>
      <div className="profile-hero">
        <div className="d-flex align-items-center gap-3">
          <div className="profile-avatar-large">{profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
          <div>
            <h4 className="mb-1">{profile.name}</h4>
            <p className="mb-0">{profile.designation} • {profile.department}</p>
          </div>
        </div>
        <button className="btn btn-outline text-white" onClick={() => setEditMode(!editMode)}>{editMode ? <><FaSave /> Save</> : <><FaUserEdit /> Edit</>}</button>
      </div>

      <div className="info-grid mt-4">
        <div className="info-block"><strong>Email</strong><div className="page-subtitle mt-1">{profile.email}</div></div>
        <div className="info-block"><strong>Phone</strong><div className="page-subtitle mt-1">{profile.phone}</div></div>
        <div className="info-block"><strong>Department</strong><div className="page-subtitle mt-1">{profile.department}</div></div>
        <div className="info-block"><strong>Location</strong><div className="page-subtitle mt-1">{profile.location}</div></div>
      </div>

      <div className="settings-card mt-4">
        <h5>Personal Details</h5>
        <div className="row mt-3">
          <div className="col-md-6 mb-3"><label>Name</label><input className="form-control" name="name" value={profile.name} disabled={!editMode} onChange={handleChange} /></div>
          <div className="col-md-6 mb-3"><label>Email</label><input className="form-control" name="email" value={profile.email} disabled={!editMode} onChange={handleChange} /></div>
          <div className="col-md-6 mb-3"><label>Phone</label><input className="form-control" name="phone" value={profile.phone} disabled={!editMode} onChange={handleChange} /></div>
          <div className="col-md-6 mb-3"><label>Location</label><input className="form-control" name="location" value={profile.location} disabled={!editMode} onChange={handleChange} /></div>
        </div>
      </div>
    </div>
  );
}
