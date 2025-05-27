import React, { useState } from "react";
import artikelDataJson from "../data/artikel_list.json";

const Artikel = () => {
  const [data, setData] = useState(artikelDataJson);
  const [form, setForm] = useState({ image: "", title: "", content: "", date: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit for add or update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing artikel
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Add new artikel
      setData([...data, form]);
    }
    setForm({ image: "", title: "", content: "", date: "" });
  };

  // Handle edit button click
  const handleEdit = (idx) => {
    setForm(data[idx]);
    setEditIndex(idx);
  };

  // Handle delete button click
  const handleDelete = (idx) => {
    const filtered = data.filter((_, index) => index !== idx);
    setData(filtered);
    // Reset form if editing the deleted item
    if (editIndex === idx) {
      setForm({ image: "", title: "", content: "", date: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="p-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 mb-4 bg-white rounded-lg shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 md:col-span-2"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </div>
      </form>


      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Content</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
              <th className="px-4 py-2 border border-gray-300 whitespace-nowrap">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300 min-w-[150px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] h-[150px] object-cover rounded shadow"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.content}</td>
                <td className="px-4 py-2 border border-gray-300">{item.date}</td>
                <td className="px-4 py-2 border border-gray-300 flex gap-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded font-semibold hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Artikel;
