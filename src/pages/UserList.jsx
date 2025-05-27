import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // max 10 user per halaman

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching users:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Logic untuk menentukan user yang ditampilkan
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-8">
      <PageHeader
        title="User Management"
        breadcrumb={['Dashboard', 'Users', 'List']}
      >
        <div className="space-x-2">
          <button className="bg-hijau text-white px-4 py-2 rounded-lg">
            <NavLink to="/formuser">
              Add User
            </NavLink>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Cancel
          </button>
        </div>
      </PageHeader>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.phone}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.age}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Contact
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}