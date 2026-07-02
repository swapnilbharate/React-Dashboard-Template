import { useState } from "react";

export default function AddUserModal({ isOpen, onClose, onAdd }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "Manager",
        status: "Active",
        location: "Mumbai",
        department: "Sales"
    });

    if (!isOpen) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd({
            id: Date.now(),
            ...form,
            name: form.name || "New User"
        });
        onClose();
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Add New User</h5>
                    <button className="btn btn-outline btn-sm" onClick={onClose}>Close</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input className="form-control" name="email" type="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select className="form-select" name="role" value={form.role} onChange={handleChange}>
                                <option>Manager</option>
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Status</label>
                            <select className="form-select" name="status" value={form.status} onChange={handleChange}>
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Away</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Department</label>
                            <input className="form-control" name="department" value={form.department} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Location</label>
                            <input className="form-control" name="location" value={form.location} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mt-4 d-flex justify-content-end gap-2">
                        <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Save User</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
