import React from 'react';

function StatusComponent({ status }) {
  // Define a CSS class based on the status
  const statusClass = status === 'Approved' ? 'approved' : 'rejected';

  return (
    <div className={`status ${statusClass}`}>
      {status}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <StatusComponent status="Approved" />
      <StatusComponent status="Rejected" />
    </div>
  );
}
