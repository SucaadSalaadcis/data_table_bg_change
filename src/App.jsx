import React from 'react';
import DataTable from './DataTable';

const App = () => {
  
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 25 },
    { id: 4, name: 'Bob Brown', age: 45 },
  ];

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
  ];

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete user with ID: ${id}?`)) {
      alert(`Deleted user with ID: ${id}`);
    }
  };

  return (
    <DataTable
      title="Users"
      data={data}
      columns={columns}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default App;

