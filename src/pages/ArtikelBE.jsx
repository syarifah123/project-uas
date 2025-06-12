import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import { artikelAPI } from "../services/artikelAPI";

export default function ArtikelBE() {
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
      const data = await artikelAPI.fetchNotes();
      setItems(data);
    } catch (err) {
      setError("Gagal memuat Artikel");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [dataForm, setDataForm] = useState({
    judul: "",
    konten: "",
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
        await artikelAPI.updateNote(editId, dataForm);
        setSuccess("Artikel berhasil diperbarui!");
      } else {
        // MODE TAMBAH
        await artikelAPI.createNote(dataForm);
        setSuccess("Artikel berhasil ditambahkan!");
      }

      // Reset form & edit mode
      setDataForm({ judul: "", konten: "" });
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
    const konfirmasi = confirm("Yakin ingin menghapus Artikel ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await artikelAPI.deleteNote(id);

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
        judul: noteToEdit.judul,
        konten: noteToEdit.konten,
      });
      setEditId(id); // Menyimpan ID yang sedang diedit
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Artikel</h2>
      </div>

      {/* Form Card */}
      <div className="bg-base-100 rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">
          Tambah Artikel Baru
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
            name="judul"
            value={dataForm.judul}
            placeholder="Judul Artikel"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          <textarea
            name="konten"
            value={dataForm.konten}
            placeholder="Konten Artikel"
            onChange={handleChange}
            disabled={loading}
            required
            rows="2"
            className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-warning hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>

        {/* ArtikelBE Table */}
        <div className="rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 ">
            <h3 className="text-lg font-semibold">
              Daftar Artikel ({items.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat Artikel..." />}

          {!loading && items.length === 0 && !error && (
            <EmptyState text="Belum ada Artikel. Tambah Artikel pertama!" />
          )}

          {!loading && items.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && items.length > 0 ? (
            <GenericTable
              columns={["#", "Judul", "Kategori", "Aksi"]} //Tambah Kolom baru
              data={items}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-warning">
                      {note.judul}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">{note.konten}</div>
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