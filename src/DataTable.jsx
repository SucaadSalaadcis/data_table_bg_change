// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'datatables.net-bs5';

// const DataTable = () => {
//     useEffect(() => {
//         // Initialize DataTable
//         $(document).ready(function () {
//             $('#example').DataTable();
//         });
//     }, []);

//     const data = [
//         { id: 1, name: 'John Doe', age: 28 },
//         { id: 2, name: 'Jane Smith', age: 34 },
//         { id: 3, name: 'Alice Johnson', age: 25 },
//         { id: 4, name: 'Bob Brown', age: 45 },
//     ];

//     return (
//         <div className="container mt-5">
//             <h2 style={{marginBottom: '30px'}}>DataTable Example</h2>
//             <table id="example" className="table table-striped" style={{ width: '100%', }}>
//                 <thead>
//                     <tr>
//                         <th className='text-center'>ID</th>
//                         <th className='text-center'>Name</th>
//                         <th className='text-center'>Age</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id}>
//                             <td className='text-center'>{item.id}</td>
//                             <td className='text-center'>{item.name}</td>
//                             <td className='text-center'>{item.age}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DataTable;




import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Importing React Icons

const DataTable = ({ title, data, columns, onView, onEdit, onDelete }) => {
    useEffect(() => {
        // Initialize DataTable
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }, []);

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        marginRight: '5px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s',
    };

    const nameCellStyle = {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '8px',
        padding: '8px',
        textAlign: 'center',
    };

    return (
        <div className="container mt-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '25px' }}>{title}</h2>
            <table
                id="example"
                className="table table-striped"
                style={{
                    width: '100%',
                    backgroundColor: 'white', // Table background remains white
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th className='text-center' key={column.key}>{column.title}</th>
                        ))}
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} style={{ backgroundColor: 'white' }}>
                            {columns.map((column, index) => (
                                <td className='text-center' key={column.key}>
                                    {column.key === 'name' ? (  // Check if the column key is 'name'
                                        <span>
                                            <button
                                                style={{
                                                    color: 'white',
                                                    border: 'none',
                                                    margin: '4px',
                                                    borderRadius: '20px',
                                                    background: '#007BFF',
                                                    padding: '0 3px 2px 3px'
                                                }}>
                                                {item[column.key]} {/* Display name inside button */}
                                            </button>
                                        </span>
                                    ) : (
                                        item[column.key] // Display other data as plain text
                                    )}
                                </td>
                            ))}
                            <td className='text-center'>
                                <button
                                    style={buttonStyle}
                                    onClick={() => onView(item.id)}
                                >
                                    <FaEye />
                                </button>
                                <button
                                    style={buttonStyle}
                                    onClick={() => onEdit(item.id)}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    style={buttonStyle}
                                    onClick={() => onDelete(item.id)}
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;


