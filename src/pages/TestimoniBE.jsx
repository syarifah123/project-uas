import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import { testimoniAPI } from "../services/testimoniAPI";

export default function TestimoniBE() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  // Memanggil fetchNotes beserta error/loading handling
  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await testimoniAPI.fetchNotes();
      setItems(data);
    } catch (err) {
      setError("Gagal memuat Testimoni");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [dataForm, setDataForm] = useState({
    nama: "",
    deskripsi: "",
    foto: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editId) {
        // MODE UPDATE
        await testimoniAPI.updateNote(editId, dataForm);
        setSuccess("Testimoni berhasil diperbarui!");
      } else {
        // MODE TAMBAH
        await testimoniAPI.createNote(dataForm);
        setSuccess("Testimoni berhasil ditambahkan!");
      }

      // Reset form & edit mode
      setDataForm({ nama: "", deskripsi: "", foto: "" });
      setEditId(null);

      // Refresh data
      await loadNotes();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus Testimoni ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await testimoniAPI.deleteNote(id);

      // Refresh data
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    const noteToEdit = items.find(note => note.id === id);
    if (noteToEdit) {
      setDataForm({
        nama: noteToEdit.nama,
        deskripsi: noteToEdit.deskripsi,
        foto: noteToEdit.foto,
      });
      setEditId(id); // Menyimpan ID yang sedang diedit
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Testimoni</h2>
      </div>

      {/* Form Card */}
      <div className="bg-base-100 rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">
          Tambah Testimoni Baru
        </h3>

        {/* Pesan Error */}
        {error && (
          <div className="mb-4 text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* Pesan Success */}
        {success && (
          <div className="mb-4 text-green-500">
            <p>{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="foto"
            value={dataForm.foto}
            placeholder="Foto Testimoni"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          <input
            type="text"
            name="nama"
            value={dataForm.nama}
            placeholder="Nama Testimoni"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          <input
            type="text"
            name="deskripsi"
            value={dataForm.deskripsi}
            placeholder="Deskripsi Testimoni"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-warning hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>

        {/* TestimoniBE Table */}
        <div className="rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 ">
            <h3 className="text-lg font-semibold">
              Daftar Testimoni ({items.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat Testimoni..." />}

          {!loading && items.length === 0 && !error && (
            <EmptyState text="Belum ada Testimoni. Tambah Testimoni pertama!" />
          )}

          {!loading && items.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && items.length > 0 ? (
            <GenericTable
              columns={["#", "Foto", "Nama", "deskripsi", "Aksi"]} //Tambah Kolom baru
              data={items}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    {note.foto ? (
                      <img
                        src={note.foto}
                        alt={note.nama}
                        className="h-16 w-16 object-cover rounded-lg border"
                        onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/64?text=No+Image"; }}
                      />
                    ) : (
                      <span className="text-gray-400 italic">Tidak ada foto</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-warning">
                      {note.nama}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">{note.deskripsi}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">
                      <button
                        onClick={() => handleDelete(note.id)}
                        disabled={loading}
                      >
                        <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleEdit(note.id)}
                        disabled={loading}
                      >
                        <AiFillEdit className="text-blue-400 text-2xl hover:text-blue-600 transition-colors" />
                      </button>
                    </div>
                  </td>
                </>
              )}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}