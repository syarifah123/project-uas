import { useState } from "react";
import lowonganDataJson from "../data/lowongan_kerja_list.json";

const LowonganKerja = () => {
  const [lowonganData, setLowonganData] = useState(lowonganDataJson);
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...form,
      requirements: form.requirements.split(",").map((r) => r.trim()),
    };

    if (editIndex !== null) {
      const updated = [...lowonganData];
      updated[editIndex] = newData;
      setLowonganData(updated);
      setEditIndex(null);
    } else {
      setLowonganData([...lowonganData, newData]);
    }

    setForm({
      title: "",
      company: "",
      location: "",
      description: "",
      requirements: "",
    });
  };

  const handleEdit = (index) => {
    const item = lowonganData[index];
    setForm({
      title: item.title,
      company: item.company,
      location: item.location,
      description: item.description,
      requirements: item.requirements.join(", "),
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = lowonganData.filter((_, i) => i !== index);
    setLowonganData(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Form Lowongan Kerja</h2>
      <form
        onSubmit={handleSubmit}
        className="mb-10 space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Posisi
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Contoh: Web Developer"
              className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Perusahaan
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Nama perusahaan"
              className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Jakarta, Bandung, Remote, dll"
              className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Persyaratan (pisahkan dengan koma)
            </label>
            <input
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Contoh: HTML, CSS, React"
              className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deskripsi
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi pekerjaan"
            rows="4"
            className="border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow transition"
          >
            {editIndex !== null ? "Update" : "Tambah"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Posisi</th>
              <th className="px-4 py-2 border border-gray-300">Perusahaan</th>
              <th className="px-4 py-2 border border-gray-300">Lokasi</th>
              <th className="px-4 py-2 border border-gray-300">Deskripsi</th>
              <th className="px-4 py-2 border border-gray-300">Persyaratan</th>
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lowonganData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300">{idx + 1}</td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.company}</td>
                <td className="px-4 py-2 border border-gray-300">{item.location}</td>
                <td className="px-4 py-2 border border-gray-300">{item.description}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {item.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm shadow"
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

export default LowonganKerja;
