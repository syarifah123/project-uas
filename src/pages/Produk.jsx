import React, { useState } from "react";
import produkData from "../data/produk_list.json";

const Produk = () => {
  const [data, setData] = useState(produkData);
  const [form, setForm] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    stock: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update existing data
      const newData = [...data];
      newData[editIndex] = { ...form, id: newData[editIndex].id };
      setData(newData);
      setEditIndex(null);
    } else {
      // Add new data
      const newItem = { ...form, id: Date.now() };
      setData([...data, newItem]);
    }

    // Reset form
    setForm({
      image: "",
      name: "",
      description: "",
      price: "",
      stock: "",
    });
  };

  // Edit button click
  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(data[index]);
  };

  // Delete button click
  const handleDelete = (index) => {
    if (window.confirm("Yakin hapus data ini?")) {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
      // Reset editIndex & form if delete item sedang diedit
      if (editIndex === index) {
        setEditIndex(null);
        setForm({
          image: "",
          name: "",
          description: "",
          price: "",
          stock: "",
        });
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Form input */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-white p-6 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="image"
            placeholder="URL Image"
            value={form.image}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nama Produk"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Deskripsi"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Harga (IDR)"
            value={form.price}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
            min="0"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stok"
            value={form.stock}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
            min="0"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          {editIndex !== null ? "Update" : "Tambah"}
        </button>
      </form>

      {/* Tabel data */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white text-sm text-left rounded-lg overflow-hidden shadow">
          <thead className="bg-[#6F826A] text-white">
            <tr>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 border-b-2 border-blue-200 font-bold uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-50 align-top">
                <td className="px-4 py-2 border border-gray-300 min-w-[150px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px] object-cover rounded shadow"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.description}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.price)}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.stock}</td>
                <td className="px-4 py-2 border border-gray-300 flex gap-4 whitespace-nowrap">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
