import React, { useState } from "react";
import bookingDataJson from "../data/booking_list.json";

const BookingCrud = () => {
  const [data, setData] = useState(bookingDataJson);
  const [form, setForm] = useState({
    user_name: "",
    email: "",
    phone: "",
    job_id: "",
    booking_date: "",
    status: "pending",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form untuk tambah/update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update
      const updatedData = [...data];
      updatedData[editIndex] = { ...updatedData[editIndex], ...form };
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Tambah
      const newItem = {
        booking_id: Date.now(), // ID unik sementara
        ...form,
      };
      setData([...data, newItem]);
    }

    // Reset form
    setForm({
      user_name: "",
      email: "",
      phone: "",
      job_id: "",
      booking_date: "",
      status: "pending",
    });
  };

  // Edit data
  const handleEdit = (idx) => {
    setEditIndex(idx);
    setForm(data[idx]);
  };

  // Hapus data
  const handleDelete = (idx) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      const filtered = data.filter((_, i) => i !== idx);
      setData(filtered);
      if (editIndex === idx) {
        setEditIndex(null);
        setForm({
          user_name: "",
          email: "",
          phone: "",
          job_id: "",
          booking_date: "",
          status: "pending",
        });
      }
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 border p-6 rounded shadow bg-white">
        <h2 className="text-lg font-semibold mb-4">{editIndex !== null ? "Edit Booking" : "Tambah Booking"}</h2>

        <input
          type="text"
          name="user_name"
          value={form.user_name}
          onChange={handleChange}
          placeholder="Nama"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telepon"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="job_id"
          value={form.job_id}
          onChange={handleChange}
          placeholder="ID Lowongan"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <input
          type="date"
          name="booking_date"
          value={form.booking_date}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        >
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={() => {
                setEditIndex(null);
                setForm({
                  user_name: "",
                  email: "",
                  phone: "",
                  job_id: "",
                  booking_date: "",
                  status: "pending",
                });
              }}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left rounded">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Telepon</th>
              <th className="px-4 py-2 border border-gray-300">ID Lowongan</th>
              <th className="px-4 py-2 border border-gray-300">Tanggal Booking</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              let statusBg = "bg-gray-200 text-gray-700";
              if (item.status === "pending") statusBg = "bg-yellow-100 text-yellow-800";
              if (item.status === "confirmed") statusBg = "bg-green-100 text-green-800";
              if (item.status === "cancelled") statusBg = "bg-red-100 text-red-800";

              return (
                <tr key={item.booking_id} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-2 border border-gray-300">{idx + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.user_name}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.phone}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.job_id}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.booking_date}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className={`capitalize px-2 py-1 rounded font-semibold text-xs ${statusBg}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 flex gap-3 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm shadow"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm shadow"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingCrud;
