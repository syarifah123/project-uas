import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader"
import { Link } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Quotes() {
    const breadcrumb = ["Dashboard", "Quote List"]
    const [quotes, setQuotes] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            // axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/quotes/random'))
            axios.get(`https://zenquotes.io/api/quotes/random`) 
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message)
                    return
                }
                const jsonData = JSON.parse(response.data.contents);
                console.log(jsonData);
                setQuotes(jsonData)
                
            })
            .catch((err) => {
                setError(err.message || "An unknown error occurred")
            })
        }, 500); // 500ms debounce
        return () => clearTimeout(timeout); // cleanup
    }, [])

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null
    return (
        <div>
            <PageHeader title="Quotes" breadcrumb={breadcrumb} />
            {errorInfo}
          
            <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
                <thead>
                    <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Quote</th>
                        <th className="px-4 py-3">Author</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                    {quotes.map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-200"
                        >
                            <td className="px-6 py-4 font-medium text-gray-700">
                                {index + 1}.
                            </td>
                            <td className="px-6 py-4">
                                <Link to={`/quotes/${item.a}`} className="text-emerald-400 hover:text-emerald-500">
                                    {item.q}
                                </Link>
                            </td>
                            <td className="px-6 py-4">{item.a}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
