import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams()
    const [advice, setAdvice] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get(`https://api.adviceslip.com/advice/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message)
                    return
                }
                setAdvice(response.data.slip)
                console.log(response.data);

            })
            .catch((err) => {
                setError(err.message)
            })
    }, [id])

    if (error) return <div className="text-red-600 p-4">{error}</div>
    if (!advice) return <div className="p-4">Loading...</div>

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-2">Advice</h2>
            <p className="text-gray-600 mb-1">{advice.advice}</p>
            <Link to={`/advice`} className="text-emerald-400 hover:text-emerald-500">
                Kembali
            </Link>
        </div>
    )
}