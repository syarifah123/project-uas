import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/login-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white bg-opacity-90 p-0 rounded-2xl shadow-md w-full max-w-3xl flex overflow-hidden">
                {/* Left Side - Image */}
                <div className="hidden md:flex flex-1 items-center justify-center bg-gray-100">
                    <img
                        src="https://kuliner-kita-hs.vercel.app/img/hero-1.png"
                        alt="Login Illustration"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right Side - Login Form */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-6">
                        <h1 className="text-4xl font-poppins font-extrabold text-gray-800">
                            <span className="text-black">KulinerKita</span>

                        </h1>
                    </div>
                    <Outlet />
                    <p className="text-center text-sm text-gray-500 mt-6"></p>
                </div>
            </div>
        </div>
    )
}
