import { useSelector } from "react-redux";
import { useState } from "react";
import { FaUserEdit, FaSave, FaBuilding } from "react-icons/fa";

export default function Profile() {
  const auth = useSelector((state) => state.auth || {});
  const role = auth.role || "user";
  const username = auth.user || "Guest User";

  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: username,
    email: username + "@company.com",
    phone: "9876543210",
    department: role === "admin" ? "Management" : "Employee",
    designation: role === "admin" ? "System Admin" : "Team Member",
    location: "Mumbai, India",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-4">

      <h3>👤 User Profile</h3>
      <hr />

      <div className="card p-4">

        <div className="row">

          {/* LEFT SIDE - PHOTO */}
          <div className="col-md-4 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              style={{ width: "150px" }}
            />

            <h5 className="mt-3 text-primary">{profile.name}</h5>
            <span className="badge bg-info text-dark">
              {role.toUpperCase()}
            </span>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="col-md-8">

            <h5>
              <FaBuilding /> Company Profile Details
            </h5>

            <div className="row mt-3">

              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={profile.name}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  value={profile.email}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Department</label>
                <input
                  className="form-control"
                  name="department"
                  value={profile.department}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Designation</label>
                <input
                  className="form-control"
                  name="designation"
                  value={profile.designation}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Location</label>
                <input
                  className="form-control"
                  name="location"
                  value={profile.location}
                  disabled={!editMode}
                  onChange={handleChange}
                />
              </div>

            </div>

            {!editMode ? (
              <button
                className="btn btn-primary"
                onClick={() => setEditMode(true)}
              >
                <FaUserEdit /> Edit Profile
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => setEditMode(false)}
              >
                <FaSave /> Save Changes
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ADMIN EXTRA SECTION */}
      {role === "admin" && (
        <div className="card p-3 mt-4">
          <h5>Admin Controls</h5>

          <button className="btn btn-warning me-2">
            Manage Company Users
          </button>

          <button className="btn btn-danger">
            System Configuration
          </button>
        </div>
      )}
    </div>
  );
}
