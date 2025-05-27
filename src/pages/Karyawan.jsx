// import jobData from "../data/job_listing.json";

// const JobApplication = () => {
//     return (
//         <div className="p-8">
//             {jobData.map((item) => (
// 		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
// 		                <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
// 		                <p className="text-gray-600">{item.company}</p>
// 		                <p className="text-gray-600">{item.image}</p>
// 		                <p className="text-gray-600">{item.salary.min}</p>
// 		            </div>
//             ))}
//         </div>
//     )
// }

// export default JobApplication;


import jobData from "../data/job_listing.json";

const JobApplication = () => {
    return (
      <div className="p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 bg-white text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 text-left">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Image</th>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">Company</th>
                <th className="px-4 py-2 border border-gray-300">Location</th>
                <th className="px-4 py-2 border border-gray-300">
                  Salary (Min - Max)
                </th>
                <th className="px-4 py-2 border border-gray-300">Education</th>
                {/* <th className="px-4 py-2 border border-gray-300">Experience</th> */}
                <th className="px-4 py-2 border border-gray-300">Skills</th>
                {/* <th className="px-4 py-2 border border-gray-300">Benefits</th> */}
                <th className="px-4 py-2 border border-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {jobData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-2 border border-gray-300 min-w-[150px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[150px] h-[150px] object-cover rounded shadow"
                    />
                  </td>

                  <td className="px-4 py-2 border-b font-semibold text-gray-800">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border-b">{item.company}</td>
                  <td className="px-4 py-2 border-b">{item.location}</td>
                  <td className="px-4 py-2 border-b">
                    Rp{parseInt(item.salary.min).toLocaleString()} - Rp
                    {parseInt(item.salary.max).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {item.requirements.education}
                  </td>
                  {/* <td className="px-4 py-2 border-b">
                    {item.requirements.experience}
                  </td> */}
                  <td className="px-4 py-2 border-b">
                    <ul className="list-disc list-inside space-y-1">
                      {item.requirements.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </td>
                  {/* <td className="px-4 py-2 border-b">
                    <ul className="list-disc list-inside space-y-1">
                      {item.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </td> */}
                  <td className="px-4 py-2 border-b">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default JobApplication;
