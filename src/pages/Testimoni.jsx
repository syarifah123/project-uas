import { useState } from "react";
import testimoniData from "../data/testimoni_list.json";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    );
  }
  return stars;
};

const Testimoni = () => {
  const [data, setData] = useState(testimoniData);
  const [form, setForm] = useState({ name: "", review: "", rating: 5 });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "rating" ? parseInt(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = form;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, { ...form, id: Date.now() }]);
    }
    setForm({ name: "", review: "", rating: 5 });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = data.filter((_, i) => i !== index);
    setData(filtered);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Form Testimoni</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border rounded shadow mb-8">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <textarea
          name="review"
          value={form.review}
          onChange={handleChange}
          placeholder="Testimoni"
          className="border px-4 py-2 w-full rounded"
          required
        />
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        >
          {[5, 4, 3, 2, 1].map((rate) => (
            <option key={rate} value={rate}>
              {rate} / 5
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          {editIndex !== null ? "Update" : "Tambah"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Testimoni</th>
              <th className="px-4 py-2 border border-gray-300">Rating</th>
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300">{idx + 1}</td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300">{item.review}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                    <span className="ml-2 text-gray-500 text-xs">{item.rating}/5</span>
                  </div>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testimoni;
