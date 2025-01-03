import { useState } from 'react';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';

function App() {
  const [loans, setLoans] = useState([]);

  const handleLoanSubmit = (loanData) => {
    setLoans(prevLoans => [...prevLoans, loanData]);
  };

  const handleStatusUpdate = (loanId, newStatus) => {
    setLoans(prevLoans =>
      prevLoans.map(loan =>
        loan.id === loanId ? { ...loan, status: newStatus } : loan
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Loan Management System</h1>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">New Loan Application</h2>
            <LoanForm onSubmit={handleLoanSubmit} />
          </div>

          <LoanList loans={loans} onUpdateStatus={handleStatusUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;