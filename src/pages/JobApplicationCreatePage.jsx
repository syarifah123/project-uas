import { useState } from "react";
import JobListing from "../data/job_listing.json";

const JobApplicationPage = () => {
    const [jobs, setJobs] = useState(JobListing);
    const [search, setSearch] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");

    const [job, setJob] = useState({
        id: "",
        title: "",
        company: "",
        location: "",
        salaryMin: "",
        salaryMax: "",
        education: "",
        experience: "",
        skills: "",
        description: "",
        benefits: "",
        image: "",
    });
    const [editingId, setEditingId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
    };

    const handleFilterSalary = (value, type) => {
        if (type === "min") {
            setMinSalary(value);
        } else if (type === "max") {
            setMaxSalary(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedJob = {
            ...job,
            id: editingId ? editingId : jobs.length + 1,
            salary: {
                min: job.salaryMin,
                max: job.salaryMax
            },
            requirements: {
                education: job.education,
                experience: job.experience,
                skills: job.skills.split(",").map((skill) => skill.trim()),
            },
            benefits: job.benefits.split(",").map((benefit) => benefit.trim()),
            // Remove the individual salary fields from the main object
        };
        
        const { salaryMin, salaryMax, ...finalJob } = formattedJob;

        if (editingId) {
            setJobs(jobs.map((j) => (j.id === editingId ? finalJob : j)));
            setEditingId(null);
        } else {
            setJobs([...jobs, finalJob]);
        }
        
        setJob({
            id: "",
            title: "",
            company: "",
            location: "",
            salaryMin: "",
            salaryMax: "",
            education: "",
            experience: "",
            skills: "",
            description: "",
            benefits: "",
            image: "",
        });
    };

    const handleEdit = (id) => {
        const jobToEdit = jobs.find((j) => j.id === id);
        setJob({
            ...jobToEdit,
            skills: jobToEdit.requirements.skills.join(", "),
            benefits: jobToEdit.benefits.join(", "),
            salaryMin: jobToEdit.salary.min,
            salaryMax: jobToEdit.salary.max,
            education: jobToEdit.requirements.education,
            experience: jobToEdit.requirements.experience,
        });
        setEditingId(id);
    };

    const handleDelete = (id) => {
        setJobs(jobs.filter((j) => j.id !== id));
        filterJobs(search, minSalary, maxSalary);
    };

    const filtered = jobs.filter(
        (j) =>
            (j.title.toLowerCase().includes(search ?? "") ||
                j.company.toLowerCase().includes(search ?? "")) &&
            (minSalary === "" || parseInt(j.salary.min) >= parseInt(minSalary)) &&
            (maxSalary === "" || parseInt(j.salary.max) <= parseInt(maxSalary))
    )

    return (
        <div className="flex flex-col w-full mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200 gap-4">
            <h2 className="text-2xl font-bold text-gray-700">Tambah Lowongan Kerja</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Posisi</label>
                    <input type="text" name="title" value={job.title} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Software Engineer" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Perusahaan</label>
                    <input type="text" name="company" value={job.company} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Nama Perusahaan" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Lokasi</label>
                    <input type="text" name="location" value={job.location} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Jakarta, Indonesia" />
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col gap-1 w-1/2">
                        <label className="text-sm font-medium text-gray-600">Gaji Minimum</label>
                        <input type="number" name="salaryMin" value={job.salaryMin} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Rp 7.500.000" />
                    </div>
                    <div className="flex flex-col gap-1 w-1/2">
                        <label className="text-sm font-medium text-gray-600">Gaji Maksimum</label>
                        <input type="number" name="salaryMax" value={job.salaryMax} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Rp 10.000.000" />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Pendidikan</label>
                    <input type="text" name="education" value={job.education} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="S1 Teknik Informatika" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Pengalaman</label>
                    <input type="text" name="experience" value={job.experience} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Minimal 2 tahun" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Skill (pisahkan dengan koma)</label>
                    <input type="text" name="skills" value={job.skills} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="JavaScript, React, Node.js" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Deskripsi Pekerjaan</label>
                    <textarea name="description" value={job.description} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500 h-24 resize-none" placeholder="Tanggung jawab pekerjaan..."></textarea>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Benefit (pisahkan dengan koma)</label>
                    <input type="text" name="benefits" value={job.benefits} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="Asuransi kesehatan, Bonus tahunan" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">URL Gambar</label>
                    <input type="text" name="image" value={job.image} onChange={handleChange} className="p-2 border rounded-md focus:outline-blue-500" placeholder="https://example.com/image.jpg" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
                    Simpan Lowongan
                </button>
            </form>
            <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-700">Daftar Lowongan</h2>
            {/* 🔍 Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Cari pekerjaan..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full p-2 border rounded-md focus:outline-blue-500"
                />
                <input
                    type="number"
                    placeholder="Gaji minimum"
                    value={minSalary}
                    onChange={e => handleFilterSalary(e.target.value, "min")}
                    className="w-full sm:w-1/3 p-2 border rounded-md focus:outline-blue-500"
                />
                <input
                    type="number"
                    placeholder="Gaji maksimal"
                    value={maxSalary}
                    onChange={e => handleFilterSalary(e.target.value, "max")}
                    className="w-full sm:w-1/3 p-2 border rounded-md focus:outline-blue-500"
                />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.length > 0 ? (
                    filtered.map((job) => (
                        <li key={job.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
                            {/* <img src={job.image} alt={job.title} className="w-full h-40 object-cover" /> */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold">{job.title}</h2>
                                <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                                <p className="mt-2 text-sm text-gray-800">
                                    <span className="font-semibold">{new Intl.NumberFormat('id-ID').format(job.salary.min)}</span> -
                                    <span className="font-semibold"> {new Intl.NumberFormat('id-ID').format(job.salary.max)}</span>
                                </p>
                                <p className="mt-2 text-sm text-gray-700">{job.description}</p>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => handleEdit(job.id)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(job.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">Tidak ada lowongan yang ditemukan.</p>
                )}
            </ul>
        </div>
    );
}

export default JobApplicationPage