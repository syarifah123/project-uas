// export default function PageHeader() {
//     return (
//       <div id="pageheader-container" className="flex items-center justify-between p-4">
//         {/* Sisi Kiri */}
//         <div id="pageheader-left" className="flex flex-col">
//           <span id="pageheader-title" className="text-3xl font-semibold">
//             Dashboard
//           </span>
//           <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
//             <span id="breadcrumb-home" className="text-gray-500">
//               Dashboard
//             </span>
//             <span id="breadcrumb-separator" className="text-gray-500">/</span>
//             <span id="breadcrumb-current" className="text-gray-500">
//               Order List
//             </span>
//           </div>
//         </div>
  
//         {/* Sisi Kanan */}
//         <div id="action-button">
//           <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
//             Add Button
//           </button>
//         </div>
//       </div>
//     );
//   }



// components/PageHeader.jsx
import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
  // Render breadcrumb sesuai tipe: string atau array
  const renderBreadcrumb = () => {
    if (typeof breadcrumb === 'string') {
      return <span className="text-gray-500">{breadcrumb}</span>;
    }

    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500">{item}</span>
          {index < breadcrumb.length - 1 && (
            <span className="text-gray-500 mx-1">/</span>
          )}
        </React.Fragment>
      ));
    }

    return null;
  };

  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>
        <div id="breadcrumb-links" className="flex items-center font-medium mt-2">
          {renderBreadcrumb()}
        </div>
      </div>

      <div id="action-button" className="flex gap-2">
        {children}
      </div>
    </div>
  );
}