import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import { faqAPI } from "../services/faqAPI";

export default function FAQBE() {
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
      const data = await faqAPI.fetchNotes();
      setItems(data);
    } catch (err) {
      setError("Gagal memuat FAQ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [dataForm, setDataForm] = useState({
    pertanyaan: "",
    jawaban: "",
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
      await faqAPI.updateNote(editId, dataForm);
      setSuccess("FAQ berhasil diperbarui!");
    } else {
      // MODE TAMBAH
      await faqAPI.createNote(dataForm);
      setSuccess("FAQ berhasil ditambahkan!");
    }

    // Reset form & edit mode
    setDataForm({ pertanyaan: "", jawaban: "" });
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
    const konfirmasi = confirm("Yakin ingin menghapus FAQ ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await faqAPI.deleteNote(id);

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
      pertanyaan: noteToEdit.pertanyaan,
      jawaban: noteToEdit.jawaban,
    });
    setEditId(id); // Menyimpan ID yang sedang diedit
  }
};

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">FAQ</h2>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Tambah FAQ Baru
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
            name="pertanyaan"
            value={dataForm.pertanyaan}
            placeholder="Pertanyaan FAQ"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />
          <textarea
            name="jawaban"
            value={dataForm.jawaban}
            placeholder="Jawaban FAQ"
            onChange={handleChange}
            disabled={loading}
            required
            rows="2"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>

        {/* FAQBE Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4 ">
            <h3 className="text-lg font-semibold">
              Daftar FAQ ({items.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat FAQ..." />}

          {!loading && items.length === 0 && !error && (
            <EmptyState text="Belum ada FAQ. Tambah FAQ pertama!" />
          )}

          {!loading && items.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && items.length > 0 ? (
            <GenericTable
              columns={["#", "Pertanyaan", "Jawaban", "Aksi"]} //Tambah Kolom baru
              data={items}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-emerald-600">
                      {note.pertanyaan}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">{note.jawaban}</div>
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