import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={image} alt={`Error ${code}`} className="max-w-xs md:max-w-md mb-6" />
      <h1 className="text-5xl font-extrabold text-hijau mb-2">{code}</h1>
      <p className="text-gray-600 text-lg mb-6">{description}</p>
      <Link to="/" className="text-white bg-hijau px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
