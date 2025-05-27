import { useState } from "react";
import artikelData from "../data/faq_list.json";

const Faq = () => {
  const [data, setData] = useState(artikelData);
  const [form, setForm] = useState({ question: "", answer: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = { ...updated[editIndex], ...form };
      setData(updated);
      setEditIndex(null);
    } else {
      const newItem = {
        id: Date.now(),
        question: form.question,
        answer: form.answer,
      };
      setData([...data, newItem]);
    }
    setForm({ question: "", answer: "" });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  return (
    <div className="p-8">

      <h2 className="text-lg font-bold mb-4">Form FAQ</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pertanyaan</label>
          <input
            name="question"
            value={form.question}
            onChange={handleChange}
            placeholder="Tulis pertanyaannya..."
            className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Jawaban</label>
          <textarea
            name="answer"
            value={form.answer}
            onChange={handleChange}
            placeholder="Tulis jawabannya..."
            className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-md shadow"
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Pertanyaan</th>
              <th className="px-4 py-2 border border-gray-300">Jawaban</th>
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300">{idx + 1}</td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.question}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.answer}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
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

export default Faq;
